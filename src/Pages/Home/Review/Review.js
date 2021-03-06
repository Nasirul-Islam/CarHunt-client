import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://pacific-oasis-97349.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <Container sx={{ textAlign: "center", my: 8 }}>
      <Typography
        sx={{ fontWeight: 700, my: 5, color: "secondary.main" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Clients Feedback
      </Typography>
      <Grid container spacing={2}>
        {review?.map((data) => (
          <Grid item xs={12} sm={6} md={3} key={data._id}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 700 }}
                >
                  {data?.name}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 400 }}>
                  {data?.comment.slice(0, 200)}...
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontWeight: 700,
                    color: "info.main",
                  }}
                >
                  Rating
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={data?.rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Box sx={{ color: "error.main", ml: 2 }}>
                    {labels[data?.rating]}
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Review;
