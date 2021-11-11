import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import mini from "../../../images/mini.jpg";
import jeep from "../../../images/jeep.jpg";
import isuzu from "../../../images/isuzu.jpg";
import nissan from "../../../images/nissan.jpg";
import sss from "../../../images/sss.jpg";
import toyota from "../../../images/toyota.png";
import udt from "../../../images/udt.jpg";
import volvo from "../../../images/volvo.jpg";
import land from "../../../images/land.jpg";
import foso from "../../../images/foso.jpg";

const Partners = () => {
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{ fontWeight: 700, color: "secondary.main" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        OUR PARTNERS
      </Typography>
      <Box>
        <img width="200px" height="150px" src={mini} alt="" />
        <img width="200px" height="150px" src={jeep} alt="" />
        <img width="200px" height="150px" src={isuzu} alt="" />
        <img width="200px" height="150px" src={nissan} alt="" />
        <img width="200px" height="150px" src={sss} alt="" />
        <img width="200px" height="150px" src={toyota} alt="" />
        <img width="200px" height="150px" src={udt} alt="" />
        <img width="200px" height="150px" src={volvo} alt="" />
        <img width="200px" height="150px" src={land} alt="" />
        <img width="200px" height="150px" src={foso} alt="" />
      </Box>
    </Container>
  );
};

export default Partners;
