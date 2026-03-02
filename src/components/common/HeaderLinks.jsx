import PropTypes from "prop-types";
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

HeaderLinks.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default HeaderLinks;
