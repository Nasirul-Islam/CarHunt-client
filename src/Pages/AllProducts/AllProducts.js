import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import useProducts from "../../hooks/useProducts";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  const { products } = useProducts();
  return (
    <>
      <Navigation></Navigation>
      <Container sx={{ textAlign: "center", my: 5 }}>
        <Typography
          sx={{ fontWeight: 700, mb: 5, color: "secondary.main" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          ALL VEHICLES
        </Typography>
        <Grid container spacing={2}>
          {products?.map((product) => (
            <SingleProduct key={product._id} product={product}></SingleProduct>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default AllProducts;
