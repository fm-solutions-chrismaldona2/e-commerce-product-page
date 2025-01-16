import "@assets/styles/reset.css";
import "@assets/styles/fonts.css";
import "@assets/styles/global.css";
import { Routes, Route } from "react-router";
import MainLayout from "@shared/layouts/MainLayout/MainLayout";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<ProductDetails />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
