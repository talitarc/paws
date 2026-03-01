import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
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
          <img src={logo.url} alt={logo.alt || "Paws Logo"} />
        ) : (
          <Typography variant="h1" color="#5F418D" fontWeight="bold">
            {logo?.siteName || "Paws"}
          </Typography>
        )}
        <HeaderMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
