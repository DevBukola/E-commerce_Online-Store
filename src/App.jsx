import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductsPage";
import ContactUs from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import ProductDetail from "./pages/ProductDetail";
import CartContextProvider from "./contexts/CartContext";
import { ProgressContextProvider } from "./contexts/ProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <ProgressContextProvider>
      <CartContextProvider>
        <Router>
          <Header />
          <Cart />
          <Checkout />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/products/:pId" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </Router>
      </CartContextProvider>
    </ProgressContextProvider>
  );
}

export default App;
