import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const SingleProduct = ({ product }) => {
  const { productName, description, price, img } = product;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
            <Button variant="contained" color="secondary">
              Purchase
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default SingleProduct;
