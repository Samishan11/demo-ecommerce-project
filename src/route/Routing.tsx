import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { ListProduct } from "../page/productlist/ListProduct"
import { ProductDetail } from "../page/productdetail/ProductDetail"
import { Cart } from "../page/cart/Cart"
export const Routing = () => {

  return (
    <Router>
      <Header />
      <Cart />
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}
