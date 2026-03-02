import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { headerMenuStyles } from "./HeaderMenu.styles";
import HeaderLinks from "./HeaderLinks";

const HeaderMenu = () => {
  const { platform, menu } = headerMenuStyles;
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
        sx={platform.mobileContainer}
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
              sx: menu.backdrop,
            },
            paper: {
              sx: menu.paper,
            },
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/">
            Find a pet
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/favorites">
            Favorites
          </MenuItem>
        </Menu>
      </IconButton>

      <Box sx={platform.desktopContainer} component="nav">
        <HeaderLinks title="Home" path="/" />
        <HeaderLinks title="Favorites" path="/favorites" />
      </Box>
    </>
  );
};

HeaderMenu.propTypes = {};

export default HeaderMenu;
