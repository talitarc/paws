import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { mainLayoutStyles } from "./MainLayout.styles";

const MainLayout = ({ children }) => {
  const { structure } = mainLayoutStyles;
  return (
    <Box sx={structure.root}>
      <Header />

      <Box component="main" sx={structure.content}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;
