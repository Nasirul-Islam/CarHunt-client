import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SingleOrder from "../SingleOrder/SingleOrder";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://pacific-oasis-97349.herokuapp.com/order?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [user.email]);
  return (
    <div>
      <Typography
        sx={{ textAlign: "center", fontWeight: 600, color: "secondary.main" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Total Order {order?.length}
      </Typography>
      <Grid container spacing={2}>
        {order?.map((order) => (
          <SingleOrder key={order._id} order={order}></SingleOrder>
        ))}
      </Grid>
    </div>
  );
};

export default MyOrder;
