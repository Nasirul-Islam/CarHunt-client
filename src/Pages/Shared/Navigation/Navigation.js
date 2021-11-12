import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const handlelogout = () => {
    logOut();
  };
  const theme = useTheme();
  const useStyles = makeStyles({
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
  });
  const { navIcon, navItemContainer, navLogo } = useStyles();
  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link to="/home" style={{ textDecoration: "none", color: "blue" }}>
          <Button color="inherit">
            <HomeIcon sx={{ color: "secondary.main", mr: 2 }} />
            Home
          </Button>
        </Link>
        <Divider />
        {!user?.email ? (
          <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
            <Button color="inherit">
              <LoginIcon sx={{ color: "secondary.main", mr: 2 }} />
              Login
            </Button>
          </Link>
        ) : (
          <>
            <Link
              to="/dashBoard"
              style={{ textDecoration: "none", color: "blue" }}
            >
              <Button color="inherit">
                <DashboardIcon sx={{ color: "secondary.main", mr: 2 }} />
                DashBoard
              </Button>
            </Link>
            <Divider />
            <Button
              onClick={handlelogout}
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
            >
              LogOut
            </Button>
          </>
        )}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#19539c" }}>
          <Container>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                className={navIcon}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className={navLogo}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                CARHUNT
              </Typography>
              <Box className={navItemContainer}>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button color="inherit">Home</Button>
                </Link>
                {!user?.email ? (
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button color="inherit">Login</Button>
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/dashBoard"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button color="inherit">DashBoard</Button>
                    </Link>
                    <Button onClick={handlelogout} color="inherit">
                      LogOut
                    </Button>
                  </>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
