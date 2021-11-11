import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Order = ({ pd_data, orderId, status }) => {
  const { productName, description, img, price } = pd_data;
  //   console.log(pd_data);
  const handleCancel = (id) => {
    if (window.confirm("Are you sure?")) {
      fetch(`http://localhost:5000/cancel/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Successfull Canceled");
            window.location.reload();
          }
        });
    } else {
      alert("Have a Good Day.");
    }
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 700 }}
          >
            {productName}
            <br />
            {orderId}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 400 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, color: "info.main" }}
          >
            Price: {price}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, color: "warning.main" }}
          >
            {status}
          </Typography>
          <Button
            onClick={() => handleCancel(orderId)}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Order;
