import { Typography } from "@mui/material";
import React from "react";

const Payment = () => {
  return (
    <div>
      <Typography
        sx={{ fontWeight: 600, color: "error.main" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Payment
      </Typography>
    </div>
  );
};

export default Payment;
