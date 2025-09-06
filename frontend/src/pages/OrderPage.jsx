import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
  Grid,
} from "@mui/material";
import { createOrder } from "../api/orders";
import MainLayout from "../layout/MainLayout";

const menuItems = [
  { id: 1, name: "Buttered Wings", price: 175 },
  { id: 2, name: "Lechon Kawali", price: 185 },
  { id: 3, name: "Garlic Shrimp", price: 165 },
  { id: 4, name: "Laing", price: 165 },
  { id: 5, name: "Lumpia", price: 165 },
  { id: 6, name: "Kare-kare", price: 205 },
  { id: 7, name: "Beef Broccoli", price: 185 },
  { id: 8, name: "Pork Binagoongan", price: 205 },
  { id: 9, name: "Kaldereta", price: 165 },
];

const OrderPage = () => {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_number: "",
    address: "",
    email: "",
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
      prev.some((i) => i.id === item.id)
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, { ...item, quantity: 1 }]
    );
  };

  const handleQuantityChange = (id, quantity) => {
    setSelectedItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Number(quantity) } : i
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.customer_name || !formData.customer_number || !formData.address) {
      alert("Name, phone, and address are required.");
      return;
    }
    if (selectedItems.length === 0) {
      alert("Please select at least one item.");
      return;
    }

    const total_amount = selectedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const orderData = {
      ...formData,
      items: selectedItems,
      total_amount,
      status: "Pending",
    };

    try {
      setLoading(true);
      await createOrder(orderData);
      alert("Order placed successfully!");
      setFormData({ customer_name: "", customer_number: "", address: "", email: "" });
      setSelectedItems([]);
    } catch (err) {
      console.error(err);
      alert("Failed to place order. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
        <MainLayout>
    
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 3 }}>
        
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Place Your Order
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="customer_number"
            value={formData.customer_number}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email (optional)"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />

          <Typography variant="h6" sx={{ mt: 3 }}>
            Menu
          </Typography>
          <FormGroup>
            {menuItems.map((item) => {
              const selected = selectedItems.find((i) => i.id === item.id);
              return (
                <Box key={item.id} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={!!selected}
                        onChange={() => handleCheckboxChange(item)}
                      />
                    }
                    label={`${item.name} - ₱${item.price.toFixed(2)}`}
                  />
                  {selected && (
                    <TextField
                      type="number"
                      size="small"
                      value={selected.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      sx={{ width: 70, ml: 2 }}
                      inputProps={{ min: 1 }}
                    />
                  )}
                </Box>
              );
            })}
          </FormGroup>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 3 }}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </Button>
        </form>
      </Paper>
    </Box>
        </MainLayout>
    
  );
};

export default OrderPage;
