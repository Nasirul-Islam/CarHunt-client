import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { user, loginwithEmail, loginWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginwithEmail(data.email, data.password, location, history);
  };
  const handleGoogleLogin = () => {
    loginWithGoogle(location, history);
  };
  console.log(user);
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{ fontWeight: 600, color: "secondary.main" }}
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
      <Link
        to="/register"
        style={{ textDecoration: "none", color: "#7b1fa2", fontWeight: 700 }}
      >
        New User? Please Register
      </Link>
      <Typography
        sx={{ fontWeight: 500, color: "secondary.main" }}
        variant="h5"
        gutterBottom
        component="div"
      >
        _____________ or ____________
      </Typography>
      <br />
      <Button
        onClick={handleGoogleLogin}
        sx={{ width: "42%", py: 1, borderRadius: 2 }}
        variant="contained"
        color="secondary"
      >
        Login With Google
      </Button>
    </Container>
  );
};

export default Login;
