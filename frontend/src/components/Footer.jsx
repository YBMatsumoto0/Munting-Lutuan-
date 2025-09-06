import React from "react";
import { Box, Typography } from "@mui/material";
import "../styles/custom.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Munting Lutuan. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
