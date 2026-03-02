import { Box, ButtonGroup, Button } from "@mui/material";
import { footerStyles } from "./Footer.styles";

const Footer = () => {
  const { layout, navigation } = footerStyles;
  return (
    <Box
      component="footer"
      sx={layout.container}
      aria-label="Links in the bottom of the webpage"
    >
      <ButtonGroup variant="text" color="white" sx={navigation.buttonGroup}>
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

Footer.propTypes = {};

export default Footer;
