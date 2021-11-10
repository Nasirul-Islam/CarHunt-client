import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, ListItemIcon } from "@mui/material";

const Test = () => {
  /* Creating 2 variables for opening and closing the menu for mobile version */
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);

  /* Creating a function to handle manu: */
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <AppBar>
      <Toolbar>
        <Typography>Example</Typography>
        {isMobile ? (
          <>
            <IconButton onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              /* to open the anchor at the top below the cursor */
              anchorEl={anchor}
              /* anchor origin so that it open it that location */
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              KeepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
            >
              <MenuItem onClick={() => setAnchor(null)}>
                <ListItemIcon>{/* <HomeIcon /> */}</ListItemIcon>
                <Typography variant="h6"> Home</Typography>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button>Home</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Test;
