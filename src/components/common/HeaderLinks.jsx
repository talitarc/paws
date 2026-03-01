import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { headerLinksStyles } from "./HeaderLinks.styles";

const HeaderLinks = ({ title, path }) => {
  return (
    <Button
      key={title}
      component={Link}
      to={path}
      sx={headerLinksStyles}
      aria-label={title}
    >
      {title}
    </Button>
  );
};

export default HeaderLinks;
