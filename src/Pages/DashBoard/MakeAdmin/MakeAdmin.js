import { Container, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://pacific-oasis-97349.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
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
        Create New Admin
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="loginform">
        <input placeholder="Email" {...register("email")} />
        <br />
        <input type="submit" value="Create Admin" className="submitBtn" />
      </form>
      {success && <Alert severity="success">Create Admin Successfully</Alert>}
    </Container>
  );
};

export default MakeAdmin;
