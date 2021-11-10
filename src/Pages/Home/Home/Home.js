import { Box } from "@mui/system";
import React from "react";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";
import Partners from "../Partners/Partners";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
  return (
    <Box>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <Review></Review>
      <Partners></Partners>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
