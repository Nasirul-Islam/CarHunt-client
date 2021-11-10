import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Purchase = () => {
  const { id } = useParams();
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <h1>product id : {id}</h1>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
