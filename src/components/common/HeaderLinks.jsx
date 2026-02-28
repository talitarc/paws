import { Button } from "@mui/material";
import { headerLinksStyles } from "./HeaderLinks.styles";

const HeaderLinks = ({ title, path }) => {
  return (
    <Button key={title} href={path} sx={headerLinksStyles} aria-label={title}>
      {title}
    </Button>
  );
};

export default HeaderLinks;
