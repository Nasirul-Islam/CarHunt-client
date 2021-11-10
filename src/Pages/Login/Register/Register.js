import { Container, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Register.css";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const { registerUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.password2) {
      registerUser(
        data.email,
        data.password,
        data.displayName,
        location,
        history
      );
    } else {
      alert("Your Password Don't Match");
      return;
    }
    console.log(data);
  };
  return (
    <>
      <Navigation></Navigation>
      <Container sx={{ textAlign: "center", my: 5 }}>
        <Typography
          sx={{ fontWeight: 600, color: "secondary.main" }}
          variant="h3"
          gutterBottom
          component="div"
        >
          Please Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="loginform">
          <input placeholder="Name" {...register("displayName")} />
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
        <Link
          to="/login"
          style={{ textDecoration: "none", color: "#7b1fa2", fontWeight: 700 }}
        >
          Already Register? Please Login
        </Link>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Register;
