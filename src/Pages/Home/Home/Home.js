import { Box } from "@mui/system";
import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Review from "../Review/Review";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Services></Services>
      <Review></Review>
      <Partners></Partners>
    </Box>
  );
};

export default Home;
