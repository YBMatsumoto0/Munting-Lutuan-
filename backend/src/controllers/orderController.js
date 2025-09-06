import { fetchAllOrders, updateOrder, deleteOrderById, createOrder } from "../models/orderModel.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await fetchAllOrders();
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const result = await updateOrder(orderId, status);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const result = await deleteOrderById(orderId);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addOrder = async (req, res) => {
  try {
    const { customer_name, customer_number, address, email, items } = req.body;

    console.log("Received order:", {
      customer_name,
      customer_number,
      address,
      email,
      items,
    });

    let totalAmount = 0;
    for (const item of items) {
      const itemTotal = item.price * item.quantity;
      totalAmount += itemTotal;
    }

    const orderData = {
      customer_name,
      customer_number,
      address,
      email,
      total_amount: totalAmount,
      status: "Pending",
    };

    const orderId = await createOrder(orderData, items);
    console.log("Order created with ID:", orderId);
    res.status(201).json({ message: "Order created successfully", orderId });
  } catch (err) {
    console.error("Error creating order:", err.message);
    res.status(500).json({ error: err.message });
  }
};
