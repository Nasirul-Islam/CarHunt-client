import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddProduct from "../AddProduct/AddProduct";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PaymentIcon from "@mui/icons-material/Payment";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";
import Payment from "../Payment/Payment";
import AddReview from "../AddReview/AddReview";
import ManageProduct from "../ManageProduct/ManageProduct";
import ManageUser from "../ManageUser/ManageUser";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageOrder from "../ManageOrder/ManageOrder";

const drawerWidth = 200;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { logOut } = useAuth();
  const handlelogout = () => {
    logOut();
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink style={{ textDecoration: "none", color: "blue" }} to="/home">
        <Button color="inherit">
          <HomeIcon sx={{ color: "secondary.main", mr: 2 }} />
          Home
        </Button>
      </NavLink>
      <br />
      <NavLink style={{ textDecoration: "none", color: "blue" }} to={`${url}`}>
        <Button color="inherit">
          <DashboardIcon sx={{ color: "secondary.main", mr: 2 }} />
          DashBoard
        </Button>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "blue" }}
        to={`${url}/myOrder`}
      >
        <Button color="inherit">
          <ShoppingCartIcon sx={{ color: "secondary.main", mr: 2 }} />
          My Order
        </Button>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "blue" }}
        to={`${url}/addReview`}
      >
        <Button color="inherit">
          <ReviewsIcon sx={{ color: "secondary.main", mr: 2 }} />
          Add Review
        </Button>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", color: "blue" }}
        to={`${url}/payment`}
      >
        <Button color="inherit">
          <PaymentIcon sx={{ color: "secondary.main", mr: 2 }} />
          Payment
        </Button>
      </NavLink>
      {admin && (
        <Box>
          <NavLink
            style={{ textDecoration: "none", color: "blue" }}
            to={`${url}/addProduct`}
          >
            <Button color="inherit">
              <AddBoxIcon sx={{ color: "secondary.main", mr: 2 }} />
              Add Product
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "blue" }}
            to={`${url}/makeAdmin`}
          >
            <Button color="inherit">
              <ManageAccountsIcon sx={{ color: "secondary.main", mr: 2 }} />
              Make Admin
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "blue" }}
            to={`${url}/manageProduct`}
          >
            <Button color="inherit">
              <MiscellaneousServicesIcon
                sx={{ color: "secondary.main", mr: 1 }}
              />
              Manage Product
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "blue" }}
            to={`${url}/manageOrder`}
          >
            <Button color="inherit">
              <ShoppingCartIcon sx={{ color: "secondary.main", mr: 2 }} />
              Manage Order
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "blue" }}
            to={`${url}/manageUser`}
          >
            <Button color="inherit">
              <PeopleAltIcon sx={{ color: "secondary.main", mr: 2 }} />
              Manage User
            </Button>
          </NavLink>
        </Box>
      )}
      <Button
        onClick={handlelogout}
        variant="contained"
        color="secondary"
        sx={{ ml: 2, mt: 3 }}
      >
        LogOut
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            CARHUNT
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/myOrder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </AdminRoute>
          <AdminRoute path={`${path}/manageUser`}>
            <ManageUser></ManageUser>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
