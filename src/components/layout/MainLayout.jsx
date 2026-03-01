import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { mainLayoutStyles } from "./MainLayout.styles";

const MainLayout = ({ children }) => {
  const { mainLayoutBox, mainContentBox } = mainLayoutStyles;
  return (
    <Box sx={mainLayoutBox}>
      <Header />
      <Box component="main" sx={mainContentBox}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
