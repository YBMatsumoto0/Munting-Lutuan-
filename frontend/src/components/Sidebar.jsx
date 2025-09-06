import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  Badge,
  Divider,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../services/logout.js";

const Sidebar = ({ selectedTab, onSelectTab, upcomingCount, onLogout }) => {
  const menuItems = [
    {
      key: "upcoming",
      label: "Upcoming Orders",
      icon: (
        <Badge
          color="error"
          badgeContent={upcomingCount > 0 ? upcomingCount : null}
        >
          <AssignmentIcon />
        </Badge>
      ),
    },
    {
      key: "completed",
      label: "Completed Orders",
      icon: <DoneAllIcon />,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 250,
          boxSizing: "border-box",
          backgroundColor: "#f8f9fb",
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <Toolbar>
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "primary.main" }}
            >
              Admin Panel
            </Typography>
          </Box>
        </Toolbar>

        {/* Menu List */}
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.key}
              selected={selectedTab === item.key}
              onClick={() => onSelectTab(item.key)}
              sx={{
                borderRadius: 2,
                mx: 1,
                my: 0.5,
                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                  color: "white",
                  "& .MuiSvgIcon-root": { color: "white" },
                },
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "white",
                  "& .MuiSvgIcon-root": { color: "white" },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>

        {/* Push logout to bottom */}
        <Box sx={{ flexGrow: 1 }} />

        <Divider />
        <List>

        <ListItemButton onClick={logout} sx={{ mx: 1, my: 0.5 }}>
        <ListItemIcon sx={{ minWidth: 40 }}>
            <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
        </ListItemButton>

        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
