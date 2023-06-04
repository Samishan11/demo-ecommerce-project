import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { ListProduct } from "../page/productlist/ListProduct"
export const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ListProduct />} />
      </Routes>
    </Router>
  )
}
