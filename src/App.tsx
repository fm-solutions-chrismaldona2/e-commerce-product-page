import "@assets/styles/reset.css";
import "@assets/styles/fonts.css";
import "@assets/styles/global.css";
import { Routes, Route } from "react-router";
import MainLayout from "@shared/layouts/MainLayout/MainLayout";
import ProductDetails from "@pages/ProductDetails/ProductDetails";
import { useDynamicFavicon } from "@shared/hooks/useDynamicFavicon";

const App = () => {
  useDynamicFavicon();
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<ProductDetails />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
