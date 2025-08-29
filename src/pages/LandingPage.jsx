import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, MobileStepper } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import { Link } from "react-router-dom";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import carousel4 from "../assets/carousel4.jpg";
import carousel5 from "../assets/carousel5.jpg";
import carousel6 from "../assets/carousel6.jpg";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import menu3 from "../assets/menu3.png";
import "../styles/custom.css";

const carouselItems = [
  { img: carousel1 },
  { img: carousel2 },
  { img: carousel3 },
  { img: carousel4 },
  { img: carousel5 },
  { img: carousel6 },
];

const cardItems = [
  { img: menu1, title: "Buttered Wings", description: "Irresistibly crispy chicken wings drenched in a rich butter sauce, served with a sweet dipping sauce for the ultimate finger-licking experience." },
  { img: menu2, title: "Lechon Kawali", description: "Indulge in tender and crispy pork belly, slow-cooked to golden perfection, and a flavorful vinegar-soy dipping sauce." },
  { img: menu3, title: "Garlic Shrimp", description: "JJuicy shrimp infused with aromatic garlic, delivering a burst of flavor in every bite, a satisfying seafood delight." },
];


const LandingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselItems.length;

  const handleNext = () => setActiveStep((prev) => (prev + 1) % maxSteps);
  const handleBack = () => setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);

  return (
    <MainLayout>
      {/* Carousel */}
      <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden", mb: 5 }}>
        <CardMedia
          component="img"
          height="400"
          image={carouselItems[activeStep].img}
          alt={carouselItems[activeStep].title}
        />
        <Box sx={{ position: "absolute", bottom: 20, left: 20, color: "white", textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}>
          <Typography variant="h4">{carouselItems[activeStep].title}</Typography>
          <Typography variant="h6">{carouselItems[activeStep].description}</Typography>
        </Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={<Button size="small" onClick={handleNext}>Next <KeyboardArrowRight /></Button>}
          backButton={<Button size="small" onClick={handleBack}><KeyboardArrowLeft /> Back</Button>}
        />
      </Box>

      {/* Cards */}
      <Grid container spacing={4}>
        {cardItems.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardMedia component="img" height="340" image={card.img} alt={card.title} />
              <CardContent>
                <Typography gutterBottom variant="h5">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary">{card.description}</Typography>
                <Button component={Link} to="/menu" size="small" sx={{ mt: 2 }} variant="contained">Learn More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default LandingPage;
