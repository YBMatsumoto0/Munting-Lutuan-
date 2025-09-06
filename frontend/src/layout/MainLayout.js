import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
