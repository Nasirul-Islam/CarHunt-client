import { Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import man from "../../../images/man.png";
import "./RequestQuote.css";

const RequestQuote = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container sx={{ textAlign: "center", my: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            sx={{ fontWeight: 700, my: 3, color: "secondary.main" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            Request A Quote
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="requestform">
            <input value={user?.displayName} {...register("displayName")} />
            <br />
            <input value={user?.email} type="email" {...register("email")} />
            <br />
            <input
              placeholder="subject"
              {...register("subject", { required: true })}
            />
            <br />
            <TextField
              className="textarea"
              multiline
              rows={4}
              placeholder="Message"
              {...register("message")}
            />
            <br />
            {errors.subject && <span>This field is required</span>}
            <br />
            <input
              type="submit"
              value="Request A Quote"
              className="submitBtn"
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img width="90%" src={man} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default RequestQuote;
