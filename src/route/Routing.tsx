import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { ListProduct } from "../page/productlist/ListProduct"
import { ProductDetail } from "../page/productdetail/ProductDetail"
import { Cart } from "../page/cart/Cart"
import { useSelector } from "react-redux"
export const Routing = () => {
  const { cart } = useSelector((state: any) => state.cart);
  return (
    <Router>
      <Header />
      <Cart cartItems={cart} />
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}
