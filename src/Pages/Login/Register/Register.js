import { Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{ fontWeight: 600, color: "#50e250;" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Please Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="loginform">
        <input placeholder="Name" {...register("name")} />
        <br />
        <input placeholder="Email" type="email" {...register("email")} />
        <br />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("password2")}
        />
        <br />
        {errors.password && <span>This field is required</span>}
        <br />
        <input type="submit" value="Register" className="submitBtn" />
      </form>
      <br />
      <Link to="/login" style={{ textDecoration: "none" }}>
        Already Register? Please Login
      </Link>
    </Container>
  );
};

export default Register;
