import React, { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ListProduct } from "../page/productlist/ListProduct";
import { ProductDetail } from "../page/productdetail/ProductDetail";
import { Cart } from "../page/cart/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { Checkout } from "../page/checkout/Checkout";

interface ProtectedProps {
  children: ReactNode;
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
  const { cart } = useSelector((state: any) => state.cart);
  return cart?.length > 0 ? <>{children}</> : <Navigate to="/" />;
};

export const Routing: React.FC = () => {
  const { order } = useSelector((state: any) => state.order);
  console.log(order)
  return (
    <Router>
      <Header />
      <Cart />
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route
          path="/checkout"
          element={
            <Protected>
              <Checkout />
            </Protected>
          }
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
};
