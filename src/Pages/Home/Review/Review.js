import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Review = () => {
  const services = [
    {
      name: "carhunt",
      describe: "loreodmf sijdfoidsjf sdoi iodjfodif",
      price: "300000",
      id: 3,
    },
    {
      name: "carhunt",
      describe: "loreodmf sijdfoidsjf sdoi iodjfodif",
      price: "300000",
      id: 2,
    },
    {
      name: "carhunt",
      describe: "loreodmf sijdfoidsjf sdoi iodjfodif",
      price: "300000",
      id: 1,
    },
    {
      name: "carhunt",
      describe: "loreodmf sijdfoidsjf sdoi iodjfodif",
      price: "300000",
      id: 4,
    },
    {
      name: "carhunt",
      describe: "loreodmf sijdfoidsjf sdoi iodjfodif",
      price: "300000",
      id: 5,
    },
    {
      name: "carhunt",
      describe: "loreodmf sijdfoidsjf sdoi iodjfodif",
      price: "300000",
      id: 6,
    },
    {
      name: "carhunt",
      describe: "loreodmf sijdfoidsjf sdoi iodjfodif",
      price: "300000",
      id: 7,
    },
    {
      name: "carhunt",
      describe: "loreodmf sijdfoidsjf sdoi iodjfodif",
      price: "300000",
      id: 8,
    },
    {
      name: "carhunt",
      describe: "loreodmf sijdfoidsjf sdoi iodjfodif",
      price: "300000",
      id: 9,
    },
  ];
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{ fontWeight: 700, mb: 5, color: "secondary.main" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        REVIEWS
      </Typography>
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <Paper elevation={3}>
              <h2>{service.name}</h2>
              <h3>{service.describe}</h3>
              <h4>{service.price}</h4>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Review;
