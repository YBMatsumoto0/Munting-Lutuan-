import React, { useEffect, useState } from "react";
import { Box, Toolbar, CircularProgress } from "@mui/material";
import Sidebar from "../components/Sidebar";
import AdminOrderTable from "../components/AdminOrderTable";
import { getOrders, updateOrderStatus, deleteOrder } from "../api/orders";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("upcoming"); // default upcoming
  const token = localStorage.getItem("token");

  const fetchOrders = async () => {
    try {
      const data = await getOrders(token);
      setOrders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleUpdateStatus = async (orderId) => {
    try {
      await updateOrderStatus(orderId, "Completed", token);
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: "Completed" } : o))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await deleteOrder(orderId, token);
      setOrders((prev) => prev.filter((o) => o.id !== orderId));
    } catch (err) {
      console.error(err);
    }
  };

  const filteredOrders =
    selectedTab === "upcoming"
      ? orders.filter((o) => o.status !== "Completed")
      : orders.filter((o) => o.status === "Completed");

  return (
    <Box sx={{ display: "flex" }}>
    <Sidebar
      selectedTab={selectedTab}
      onSelectTab={setSelectedTab}
      upcomingCount={orders.filter((o) => o.status !== "Completed").length}
    />   
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {loading ? (
          <CircularProgress />
        ) : (
          <AdminOrderTable
            orders={filteredOrders}
            onUpdateStatus={handleUpdateStatus}
            onDeleteOrder={handleDeleteOrder}
          />
        )}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
