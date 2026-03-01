import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { client } from "../../sanityClient";
import { headerStyles } from "./Header.styles";
import HeaderMenu from "../common/HeaderMenu";

const Header = () => {
  const { layout, brand } = headerStyles;
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
    <AppBar position="static" sx={layout.appBar}>
      <Toolbar sx={layout.toolbar}>
        <Box sx={brand.logoBox} />

        {logo?.url ? (
          <Button component={Link} to="/" aria-label="Go to homepage">
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
