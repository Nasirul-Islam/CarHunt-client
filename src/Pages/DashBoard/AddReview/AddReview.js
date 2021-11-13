import { Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./AddReview.css";

const AddReview = () => {
  const { user } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://pacific-oasis-97349.herokuapp.com/review", {
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
          console.log(data);
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
        Give Your Review
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="addReviewform">
        <input value={user?.displayName} {...register("name")} />
        <br />
        <input value={user?.email} {...register("email")} />
        <br />
        <input
          placeholder="Comment"
          {...register("comment", { required: true })}
        />
        <br />
        <input
          type="number"
          placeholder="Rating"
          {...register("rating", { min: 0, max: 5 })}
        />
        <br />
        {errors.password && <span>This field is required</span>}
        <br />
        <input type="submit" value="Review" className="submitBtn" />
      </form>
    </Container>
  );
};

export default AddReview;
