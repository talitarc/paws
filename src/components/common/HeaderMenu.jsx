import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { headerMenuStyles } from "./HeaderMenu.styles";
import HeaderLinks from "./HeaderLinks";

const HeaderMenu = () => {
  const { mobileMenu, desktopMenu } = headerMenuStyles;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="end"
        color="black"
        aria-label="menu"
        sx={mobileMenu}
        onClick={handleClick}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
            backdrop: {
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            },
            paper: {
              sx: {
                minWidth: "250px",
                transform: "scale(1.2)",
                transformOrigin: "top right",
              },
            },
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleClose}>Find a pet</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/favorites">
            Favorites
          </MenuItem>
        </Menu>
      </IconButton>
      <Box sx={desktopMenu} component="nav">
        <HeaderLinks title="Home" path="/home" />
        <HeaderLinks title="Favorites" path="/favorites" />
      </Box>
    </>
  );
};

export default HeaderMenu;
