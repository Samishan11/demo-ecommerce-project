import React from "react";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { ProductCart } from "./component/ProductCart";
import { Cart } from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

export const ListProduct: React.FC = () => {
    // rkt
    const dispatch = useDispatch();
    const { cart } = useSelector((state: any) => state.cart);
    // rtk query 
    const { data } = useGetProductsQuery();

    // methods
    const handleAddToCart = (product: any) => {
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.image,
        }
        dispatch(addToCart(cartItem));
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cold-5 ">
                {
                    data?.map((product) => <ProductCart onClick={() => {
                        handleAddToCart(product)
                    }} key={product.id} product={product} />)
                }

            </div>
            <Cart cartItems={cart} />
        </div>
    );
};

