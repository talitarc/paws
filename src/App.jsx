import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import FindAPet from "./pages/FindAPet";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<FindAPet />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
