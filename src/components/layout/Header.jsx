import { AppBar, Box, Toolbar } from "@mui/material";
import { headerStyles } from "./Header.styles";
import HeaderMenu from "../common/HeaderMenu";

const Header = () => {
  const { appBar, toolbar, logoBox } = headerStyles;
  return (
    <AppBar position="static" sx={appBar}>
      <Toolbar sx={toolbar}>
        <Box sx={logoBox} />
        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Paws logo" />
        <HeaderMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
