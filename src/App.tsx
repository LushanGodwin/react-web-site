import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import "./App.css";
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenShoes from "./pages/MenShoes";
import LadiesShoes from "./pages/LadiesShoes";
import KidShoes from "./pages/KidShoes";
import Bags from "./pages/Bags";
import Offers from "./pages/Offers";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/menShoes" element={<MenShoes />} />
              <Route path="/ladiesShoes" element={<LadiesShoes />} />
              <Route path="/kidShoes" element={<KidShoes />} />
              <Route path="/bags" element={<Bags />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}
export default App;