import { Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://pacific-oasis-97349.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{ fontWeight: 600, color: "secondary.main" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="addProductform">
        <input placeholder="Product Name" {...register("productName")} />
        <br />
        <input placeholder="Description" {...register("description")} />
        <br />
        <input
          placeholder="Image URL"
          {...register("img", { required: true })}
        />
        <br />
        <input type="number" placeholder="Price" {...register("price")} />
        <br />
        {errors.password && <span>This field is required</span>}
        <br />
        <input type="submit" value="Confirm" className="submitBtn" />
      </form>
    </Container>
  );
};

export default AddProduct;
