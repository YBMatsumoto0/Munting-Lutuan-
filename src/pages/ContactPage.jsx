import React from "react";
import { Box, Typography, Grid, Paper, IconButton, Link } from "@mui/material";
import { LocationOn, Email, Phone } from "@mui/icons-material";
import MainLayout from "../layout/MainLayout";
import "../styles/custom.css";

const contactItems = [
  {
    icon: <LocationOn sx={{ fontSize: 50, color: "#FFD700" }} />,
    title: "Address",
    content: "Marcela St. Brgy 27, Maypajo, 1400 Caloocan, Philippines",
  },
  {
    icon: <Email sx={{ fontSize: 50, color: "#FFD700" }} />,
    title: "Email",
    content: "muntinglutuan@gmail.com",
    link: "mailto:muntinglutuan@gmail.com",
  },
  {
    icon: <Phone sx={{ fontSize: 50, color: "#FFD700" }} />,
    title: "Phone",
    content: "0966 144 5412",
    link: "tel:+639661445412",
  },
];

const ContactPage = () => {
  return (
    <MainLayout>
    <Box className="contact-hero">
      <Typography variant="h3" component="h1">
        Contact Us
      </Typography>
      <Typography variant="h6">
        We would love to hear from you! Reach out to us using the contact information below.
      </Typography>
    </Box>
  <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}> {contactItems.map((item, index) => ( <Grid item xs={12} sm={6} md={4} key={index}> <Paper elevation={6} sx={{ p: 4, textAlign: "center", transition: "transform 0.3s", "&:hover": { transform: "translateY(-10px)" }, }} > <IconButton disabled sx={{ mb: 2 }}> {item.icon} </IconButton> <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}> {item.title} </Typography> {item.link ? ( <Link href={item.link} underline="none" color="inherit"> <Typography variant="body1">{item.content}</Typography> </Link> ) : ( <Typography variant="body1">{item.content}</Typography> )} </Paper> </Grid> ))} </Grid>

<Box className="contact-map">
  <iframe
    title="Munting Lutuan Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.694246148428!2d120.9920075747804!3d14.648574889807192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c967d2d394a9%3A0x2cfa1e2d3f4f0a3c!2sMarcela%20St%2C%20Maypajo%2C%20Caloocan%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1693300000000!5m2!1sen!2sph"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  />
</Box>

    </MainLayout>
  );
};

export default ContactPage;
