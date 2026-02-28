import { useState } from "react";
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
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Find a pet</MenuItem>
          <MenuItem onClick={handleClose}>Favorites</MenuItem>
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
