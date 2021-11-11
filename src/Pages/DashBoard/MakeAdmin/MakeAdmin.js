import { Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{ fontWeight: 600, color: "secondary.main" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Create New Admin
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="loginform">
        <input placeholder="Email" {...register("email")} />
        <br />
        <input type="submit" value="Create Admin" className="submitBtn" />
      </form>
    </Container>
  );
};

export default MakeAdmin;
