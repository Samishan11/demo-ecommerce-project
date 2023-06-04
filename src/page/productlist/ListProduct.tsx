import React from "react";

import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { ProductCart } from "./component/ProductCart";
import Cart from "../cart/Cart";
const cartItems = [
    {
        id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, quantity: 2, image
            :
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        id: 2, title: 'Mens Casual Premium Slim Fit T-Shirts ', price: 22.3, quantity: 2, image
            :
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },

]
export const ListProduct: React.FC = () => {
    // rtk query 
    const { data } = useGetProductsQuery()
    console.log(data)
    return (
        <div className="flex justify-center mt-10">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cold-5 ">
                {
                    data?.map((product) => <ProductCart key={product.id} {...product} />)
                }
                <Cart cartItems={cartItems} />

            </div>
        </div>
    );
}
