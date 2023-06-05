import React, { useMemo } from "react";
import { useParams } from "react-router-dom"
import { Typography } from "@material-tailwind/react";
import { useGetSingleProductQuery } from "../../redux/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../redux/slice/cartSlice";
import { Box } from "@mui/material";


export const ProductDetail: React.FC = () => {
    const { productId } = useParams();
    // rtk hooks 
    const dispatch = useDispatch();
    const { cart } = useSelector((state: any) => state.cart)
    // rtk query
    const { data: product } = useGetSingleProductQuery(String(productId));

    // methods
    const handleAddToCart = (product: any) => {
        const cartItem = {
            pid: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.image,
        }
        dispatch(addToCart(cartItem));
    };
    const productInCart = useMemo(() => cart.find((data: any) => String(data.pid) === String(productId)), [cart, productId]);
    const handleUpdateCart = (data: any) => {
        const cData = { ...productInCart, quantity: data.quantity, pid: data?.pid }
        dispatch(updateCart(cData));
    };

    return (
        <Box className="flex flex-col sm:flex-row items-center sm:items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <Box className=" w-full sm:w-2/4 ">
                <img className=" w-[80%]" alt="img of a girl posing" src={product?.image} />
            </Box>
            <Box className=" w-full md:w-2/4 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <Box className="border-b border-gray-200 pb-6">
                    <Typography
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        {product?.title}
                    </Typography>
                </Box>
                <Box>
                    <Typography className=" text-base lg:leading-tight leading-normal text-gray-600 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</Typography>
                    <Typography className="text-base leading-4 mt-7 text-gray-600">Product Code: 8BN321AF2IF0NYA</Typography>
                    <Typography className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</Typography>
                    <Typography className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</Typography>
                    <Typography className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</Typography>
                    <Typography className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</Typography>
                </Box>
                {
                    !productInCart ?
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-900
						w-full
						py-4
						hover:bg-gray-800"
                        >
                            Add To Cart
                        </button>
                        :
                        <button
                            onClick={() => handleUpdateCart({ pid: product?.id, quantity: productInCart.quantity + 1 })}
                            className="
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-900
						w-full
						py-4
						hover:bg-gray-800">
                            Update Cart
                        </button>
                }
            </Box>
        </Box>
    );
};

