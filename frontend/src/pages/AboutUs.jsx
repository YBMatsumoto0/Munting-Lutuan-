import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import "../styles/custom.css"; 

const aboutImages = [
  { src: require("../assets/image1.jpg"), alt: "Image 1" },
  { src: require("../assets/image2.jpeg"), alt: "Image 2" },
  { src: require("../assets/image3.jpeg"), alt: "Image 3" },
];

const AboutPage = () => {
  return (
    <MainLayout>
      <Box className="about-hero">
        <Typography variant="h3" className="about-title">
          About Us
        </Typography>
        <Typography variant="body1" className="about-text"  sx={{ textAlign: "center", margin: "0 auto", maxWidth: 900 }}>
          Welcome to our Online Shop! At Munting Lutuan, we are dedicated to bringing you the authentic flavors of Filipino cuisine in the comfort of your own home. 
          Indulge in a limited but carefully curated selection of homemade Filipino dishes that capture the essence of our rich culinary heritage. Each dish is meticulously prepared with love, following traditional recipes passed down through generations, using the freshest locally sourced ingredients. 
          Complementing our delightful Filipino dishes, we also offer a range of premium coffee beans sourced from various regions of the Philippines, providing you with a complete sensory experience. 
          Experience the warmth, tradition, and flavors of the Philippines with every bite and sip. Place your order today and let us transport you to the vibrant world of Filipino cuisine. Salamat po!
        </Typography>
      </Box>

      <Box className="about-gallery">
        {aboutImages.map((img, index) => (
          <Card key={index} className="about-card">
            <CardMedia component="img" image={img.src} alt={img.alt} className="about-card-img" />
          </Card>
        ))}
      </Box>
    </MainLayout>
  );
};

export default AboutPage;
