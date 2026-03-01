import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { client } from "../../sanityClient";
import { headerStyles } from "./Header.styles";
import HeaderMenu from "../common/HeaderMenu";

const Header = () => {
  const { appBar, toolbar, logoBox } = headerStyles;
  const [logo, setLogo] = useState(null);
  const LOGO_QUERY = `*[_type == "brandAssets"][0]{
    "url": image.asset->url,
    "alt": image.alt,
    "siteName": name
  }`;

  useEffect(() => {
    client
      .fetch(LOGO_QUERY)
      .then((data) => {
        setLogo(data);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
      });
  }, []);

  return (
    <AppBar position="static" sx={appBar}>
      <Toolbar sx={toolbar}>
        <Box sx={logoBox} />
        {logo?.url ? (
          <Button component={Link} to="/">
            <img src={logo.url} alt={logo.alt || "Paws Logo"} />
          </Button>
        ) : (
          <Typography variant="h1" color="main" fontWeight="bold">
            {logo?.siteName || "Paws"}
          </Typography>
        )}
        <HeaderMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
