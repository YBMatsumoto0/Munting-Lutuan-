import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const AdminOrderTable = ({ orders, onUpdateStatus, onDeleteOrder }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(""); // cmplete or delete
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleClickOpen = (orderId, type) => {
    setSelectedOrderId(orderId);
    setDialogType(type);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedOrderId(null);
    setDialogType("");
  };

  const handleConfirm = () => {
    if (dialogType === "complete") {
      onUpdateStatus(selectedOrderId);
    } else if (dialogType === "delete") {
      onDeleteOrder(selectedOrderId);
    }
    handleClose();
  };

  return (
    <Stack spacing={3}>
      {orders.map((order) => (
        <Paper key={order.id} sx={{ p: 3, boxShadow: 3 }}>
          <Typography variant="h6">
            Order #{order.id} - {order.customer_name}
          </Typography>
          <Typography variant="subtitle2">Contact: {order.customer_number}</Typography>
          <Typography variant="subtitle2">Address: {order.address}</Typography>
          <Typography variant="subtitle2">{order.email}</Typography>
          <Typography variant="subtitle2" sx={{ mt: 1, mb: 1 }}>
            Items:
          </Typography>
          {order.items.map((item, i) => (
            <Typography key={i}>
              • {item.name} x{item.quantity} - ₱{Number(item.price).toFixed(2)} each
            </Typography>
          ))}
          <Typography sx={{ mt: 1, fontWeight: "bold" }}>
            Total: ₱{Number(order.total_amount).toFixed(2)}
          </Typography>
          <Typography>Status: {order.status}</Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            {/* show only if not completed */}
            {order.status !== "Completed" && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClickOpen(order.id, "complete")}
                >
                  Mark Completed
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleClickOpen(order.id, "delete")}
                >
                  Cancel Order
                </Button>
              </>
            )}
          </Stack>

                  </Paper>
                ))}

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>
          {dialogType === "complete" ? "Confirm Completion" : "Confirm Cancellation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogType === "complete"
              ? "Are you sure you want to mark this order as completed? This action cannot be undone."
              : "Are you sure you want to cancel this order? This action cannot be undone."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default AdminOrderTable;
