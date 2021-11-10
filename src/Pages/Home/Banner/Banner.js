import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <Box className="banner">
      <Container sx={{ textAlign: "center" }}>
        <Typography
          sx={{ color: "white", fontWeight: 700, lineHeight: "normal", my: 2 }}
          variant="h4"
          gutterBottom
          component="div"
        >
          UNSURE WHICH VEHICLE YOU ARE LOOKING FOR? <br /> <br /> FIND IT HERE
        </Typography>
        <br />
        <Link to="/allProducts">
          <Button
            sx={{
              py: 2,
              fontWeight: 700,
              px: 4,
              borderRadius: 16,
            }}
            variant="contained"
            color="secondary"
          >
            Explore
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Banner;
