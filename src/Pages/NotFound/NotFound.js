import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";

const NotFound = () => {
  return (
    <div className="notFound">
      <Container>
        <h1>4 0 4</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          Oops! The page you are looking for does not exist.
          <br />
          It might have been removed or deleted.
        </p>
        <Button variant="contained" color="secondary">
          <Link to="/home">Return Home</Link>
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
