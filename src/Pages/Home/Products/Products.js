import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import useProducts from "../../../hooks/useProducts";
import SingleProduct from "../../AllProducts/SingleProduct";

const Products = () => {
  const { products } = useProducts();
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{ fontWeight: 700, mb: 5, color: "secondary.main" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        OUR VEHICLES
      </Typography>
      <Grid container spacing={2}>
        {products?.slice(0, 6).map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
