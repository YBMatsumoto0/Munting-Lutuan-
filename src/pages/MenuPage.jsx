import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import MainLayout from "../layout/MainLayout";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import menu3 from "../assets/menu3.png";
import menu4 from "../assets/menu4.png";
import menu5 from "../assets/menu5.png";
import menu6 from "../assets/menu6.png";
import menu7 from "../assets/menu7.png";
import menu8 from "../assets/menu8.png";
import menu9 from "../assets/menu9.png";

const menuItems = [
  {
    img: menu1,
    title: "Buttered Wings",
    description: "Irresistibly crispy chicken wings drenched in a rich butter sauce, served with a sweet dipping sauce.",
    price: "₱175.00",
  },
  {
    img: menu2,
    title: "Lechon Kawali",
    description: "Tender and crispy pork belly, slow-cooked to golden perfection, served with pickled papaya and vinegar-soy sauce.",
    price: "₱185.00",
  },
  {
    img: menu3,
    title: "Garlic Shrimp",
    description: "Juicy shrimp infused with aromatic garlic, accompanied by steamed rice for a satisfying seafood delight.",
    price: "₱165.00",
  },
  {
    img: menu4,
    title: "Laing",
    description: "Taro leaves cooked in rich coconut milk and spices, a creamy and mildly spicy vegetable delicacy.",
    price: "₱165.00",
  },
  {
    img: menu5,
    title: "Lumpia",
    description: "Crispy Filipino spring rolls with vegetables and meat, served with a sweet and tangy dipping sauce.",
    price: "₱165.00",
  },
  {
    img: menu6,
    title: "Kare-kare",
    description: "Traditional Filipino stew with tender oxtail and vegetables in creamy peanut sauce, served with bagoong.",
    price: "₱205.00",
  },
  {
    img: menu7,
    title: "Beef Broccoli",
    description: "Tender beef strips stir-fried with broccoli florets in a savory sauce.",
    price: "₱185.00",
  },
  {
    img: menu8,
    title: "Pork Binagoongan",
    description: "Succulent pork chunks simmered in tangy shrimp paste sauce, pairs perfectly with steamed rice.",
    price: "₱205.00",
  },
  {
    img: menu9,
    title: "Kaldereta",
    description: "Hearty Filipino stew with tender meat, simmered in tomato-based sauce with potatoes and bell peppers.",
    price: "₱165.00",
  },
];

const MenuPage = () => {
  return (
    <MainLayout>
      <Box sx={{ textAlign: "center", py: 6, bgcolor: "#f5f5f5", mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Our Menu
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Explore our delicious selection of Filipino products.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {menuItems.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ borderRadius: 2, boxShadow: 3, height: "100%" }}>
              <CardMedia component="img" height="300" image={item.img} alt={item.title} />
              <CardContent>
                <Typography gutterBottom variant="h5">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: "bold" }}>
                  Price: {item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default MenuPage;
