import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import MainLayout from "./components/layout/MainLayout";
import FindAPet from "./pages/FindAPet";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Routes>
          <Route path="/" element={<FindAPet />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
