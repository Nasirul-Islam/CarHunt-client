import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import StarIcon from "@mui/icons-material/Star";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{ fontWeight: 700, mb: 5, color: "secondary.main" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        REVIEWS
      </Typography>
      <Grid container spacing={2}>
        {review?.map((data) => (
          <Grid item xs={12} sm={6} md={3} key={data._id}>
            <Card sx={{ minWidth: 275 }}>
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
                  Rating: {data?.rating}
                </Typography>
                <StarIcon sx={{ color: "error.main" }} />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Review;
