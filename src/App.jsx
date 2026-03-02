import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import MainLayout from "./components/layout/MainLayout";

const FindAPet = lazy(() => import("./pages/FindAPet"));
const Favourites = lazy(() => import("./pages/Favourites"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense
        fallback={
          <div style={{ height: "100vh", backgroundColor: "#E6E0E9" }} />
        }
      >
        <MainLayout>
          <Routes>
            <Route path="/" element={<FindAPet />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
