import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";

// Views
import Login from "./views/login/Login";
import Dashboard from "./views/dashboard/Dashboard";
import Cart from "./views/cart/Cart";
import Checkout from "./views/cart/Checkout";
import Header from "./views/layouts/Header";
import Footer from "./views/layouts/Footer";
import ProductDetails from "./views/productDetails/ProductDetails";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="details/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
