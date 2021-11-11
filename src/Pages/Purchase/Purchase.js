import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import useProducts from "../../hooks/useProducts";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./Purchase.css";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { products } = useProducts();
  const productsresult = products?.find((product) => product._id === id);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    data.purchaseid = id;
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Purchase Successfully");
          reset();
        }
      });
  };
  return (
    <>
      <Navigation></Navigation>
      <Container sx={{ textAlign: "center", my: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} sx={{ my: 3 }}>
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                image={productsresult?.img}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 700, color: "secondary.main" }}
                >
                  {productsresult?.productName}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 400, color: "secondary.main" }}
                >
                  {productsresult?.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 700, color: "secondary.main" }}
                >
                  Price: {productsresult?.price}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              sx={{ fontWeight: 600, color: "secondary.main" }}
              variant="h3"
              gutterBottom
              component="div"
            >
              Give Your Information
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="loginform">
              <input value={user?.displayName} {...register("name")} />
              <br />
              <input value={user?.email} {...register("email")} />
              <br />
              <input
                placeholder="Address"
                {...register("address", { required: true })}
              />
              <br />
              <input
                type="number"
                placeholder="Phone Number"
                {...register("phone")}
              />
              <br />
              {errors.password && <span>This field is required</span>}
              <br />
              <input type="submit" value="Register" className="submitBtn" />
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
