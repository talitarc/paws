import { Routes, Route } from "react-router-dom";
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import MainContent from "./components/layout/MainContent";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* URL: localhost:5173/ */}
        <Route path="/" element={<MainContent />} />

        {/* URL: localhost:5173/favorites */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
