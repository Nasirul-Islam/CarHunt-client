import { Box } from "@mui/system";
import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Review from "../Review/Review";

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Services></Services>
      <Review></Review>
    </Box>
  );
};

export default Home;
