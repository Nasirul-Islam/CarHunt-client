import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { user, loginwithEmail, loginWithGoogle } = useFirebase();
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
      <Link to="/register" style={{ textDecoration: "none" }}>
        New User? Please Register
      </Link>
      <Typography
        sx={{ fontWeight: 600, color: "secondary.main" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        {" "}
        or{" "}
      </Typography>
      <Button onClick={handleGoogleLogin} variant="contained" color="secondary">
        Login With Google
      </Button>
    </Container>
  );
};

export default Login;
