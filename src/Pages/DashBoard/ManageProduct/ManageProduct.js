import React from "react";
import { Button, Container, Typography } from "@mui/material";
import useProducts from "../../../hooks/useProducts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageProduct = () => {
  const { products } = useProducts();
  // Delete Method inside function
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      fetch(`https://pacific-oasis-97349.herokuapp.com/product/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            console.log(data);
            alert("Deleted Successfully");
            window.location.reload();
          }
        });
    }
  };
  return (
    <>
      <Container sx={{ textAlign: "center", my: 5 }}>
        <Typography
          sx={{ fontWeight: 700, mb: 5, color: "secondary.main" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Manage ALL VEHICLES
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Model</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row, index) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{row?.productName}</TableCell>
                  <TableCell align="right">{row?.price}</TableCell>
                  <TableCell align="right">{row?._id}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleDelete(row?._id)}
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ManageProduct;
