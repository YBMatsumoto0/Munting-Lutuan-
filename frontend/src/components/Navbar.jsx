import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/custom.css";
import logo from "../assets/Vector-Logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={logo} alt="Logo" style={{ height: 80, width: 80 }} />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Munting Lutuan
          </Typography>
        </Box>
        
        <div>   {/* nav btn */}
           <Box>
          <Button component={Link} to="/" className="navbar">Home</Button>
          <Button component={Link} to="/menu" className="navbar">Menu</Button>
          <Button component={Link} to="/contact" className="navbar">Contact</Button>
          <Button component={Link} to="/about" className="navbar">About Us</Button>
          <Button component={Link} to="/order" className="navbar">Order</Button>
          <Button component={Link} to="/login" className="navbar">Login</Button>

        </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;