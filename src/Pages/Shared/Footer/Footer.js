import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#19539c" }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ mb: 2, color: "whitesmoke", fontWeight: 700 }}
              variant="h4"
              gutterBottom
              component="div"
            >
              CARHUNT
            </Typography>
            <Typography
              sx={{ color: "#d0c9c9", fontWeight: 700 }}
              variant="caption"
              display="block"
              gutterBottom
            >
              © 2021 Auto Club. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
            <Box sx={{ mb: 2 }}>
              <FacebookIcon sx={{ color: "white" }} />
              <TwitterIcon sx={{ color: "white", ml: 2 }} />
              <InstagramIcon sx={{ color: "white", ml: 2 }} />
              <GoogleIcon sx={{ color: "white", ml: 2 }} />
              <LinkedInIcon sx={{ color: "white", ml: 2 }} />
            </Box>
            <Link
              style={{
                textDecoration: "none",
                color: "#d0c9c9",
                fontWeight: 500,
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#d0c9c9",
                fontWeight: 500,
                marginLeft: "10px",
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              About
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#d0c9c9",
                fontWeight: 500,
                marginLeft: "10px",
              }}
              variant="caption"
              display="block"
              gutterBottom
            >
              Contact
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
