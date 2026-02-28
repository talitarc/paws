import { Box, ButtonGroup, Button } from "@mui/material";
import { footerStyles } from "./Footer.styles";

const Footer = () => {
  const { footerContainer, footerLinksGroup } = footerStyles;
  return (
    <Box
      component="footer"
      sx={footerContainer}
      aria-label="Links in the bottom of the webpage"
    >
      <ButtonGroup variant="text" color="white" sx={footerLinksGroup}>
        <Button url="/faq" aria-label="FAQ">
          FAQ
        </Button>
        <Button url="contact" aria-label="Contact">
          Contact
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Footer;
