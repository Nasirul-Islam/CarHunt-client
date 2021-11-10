import { Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
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
        Please Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="loginform">
        <input placeholder="Email" type="email" {...register("email")} />
        <br />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <br />
        {errors.password && <span>This field is required</span>}
        <br />
        <input type="submit" value="Login" className="submitBtn" />
      </form>
      <br />
      <Link to="/register" style={{ textDecoration: "none" }}>
        New User? Please Register
      </Link>
    </Container>
  );
};

export default Login;
