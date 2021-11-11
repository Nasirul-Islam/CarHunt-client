import React from "react";
import useProducts from "../../../hooks/useProducts";
import Order from "./Order";
import { Grid } from "@mui/material";

const SingleOrder = ({ order }) => {
  const { status, purchaseid, _id } = order;
  const { products } = useProducts();
  const product = products.filter((product) => product._id === purchaseid);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        {product?.map((pd_data) => (
          <Order
            key={pd_data._id}
            pd_data={pd_data}
            orderId={_id}
            status={status}
          ></Order>
        ))}
      </Grid>
    </>
  );
};

export default SingleOrder;
