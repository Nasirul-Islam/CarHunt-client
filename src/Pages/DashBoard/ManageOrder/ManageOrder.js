import React, { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  // console.log(orders);
  useEffect(() => {
    fetch("https://pacific-oasis-97349.herokuapp.com/allorder")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [control]);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      fetch(`https://pacific-oasis-97349.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            setControl(!control);
            alert("Deleted Successfully");
          }
        });
    }
  };
  const handleConfirm = (id) => {
    const confirmOrder = orders.find((order) => order._id === id);
    confirmOrder.status = "Shipped";
    // console.log(confirmOrder);
    fetch(`https://pacific-oasis-97349.herokuapp.com/confirmOrder/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(confirmOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Confirm Successfully");
        }
      });
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
          Manage ALL Order
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row, index) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{row?.name}</TableCell>
                  <TableCell align="right">{row?.email}</TableCell>
                  <TableCell align="right">{row?.purchaseid}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleConfirm(row?._id)}
                      variant="outlined"
                      color="success"
                      startIcon={<AddBoxIcon />}
                      sx={{ mr: 1 }}
                    >
                      Confirm
                    </Button>
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

export default ManageOrder;
