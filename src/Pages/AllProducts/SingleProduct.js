import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { productName, description, price, img, _id } = product;
  const url = `purchase/${_id}`;
  const history = useHistory();
  const handlePurchase = () => {
    history.push(url);
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            alt="green iguana"
            height="250"
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
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              {description.slice(0, 220)}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 700, color: "info.main" }}
            >
              Price: ${price}
            </Typography>
            <Button
              onClick={handlePurchase}
              variant="contained"
              color="secondary"
            >
              Purchase
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default SingleProduct;
