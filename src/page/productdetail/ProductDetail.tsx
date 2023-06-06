import React, { useMemo, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Typography } from "@material-tailwind/react";
import { useGetSingleProductQuery } from "../../redux/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../../redux/slice/cartSlice";
import { Box, Rating } from "@mui/material";
import { LoadingSkeleton } from "../../components/LoadingSkeleton";
import { v4 as uuid } from 'uuid';


export const ProductDetail: React.FC = () => {
    const { productId } = useParams();
    // rtk hooks 
    const dispatch = useDispatch();
    const { cart } = useSelector((state: any) => state.cart)
    // rtk query
    const { data: product, isLoading } = useGetSingleProductQuery(String(productId));
    // methods
    const unique_id = uuid();
    const handleAddToCart = (product: any) => {
        const cartItem = {
            id: unique_id.slice(0, 5),
            pid: product.id,
            title: product.title,
            price: product.price,
            quantity: Number(1),
            image: product.image,
        }
        dispatch(addToCart(cartItem));
    };
    const productInCart = useMemo(() => cart.find((data: any) => String(data.pid) === String(productId)), [cart, productId]);
    const handleUpdateCart = (data: any) => {
        const cData = { ...productInCart, ...data }
        dispatch(updateCart(cData));
    };

    useEffect(() => {
        window.scroll({ top: 0, })
    }, [window])

    return (
        <Box className="flex flex-col sm:flex-row items-center sm:items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            {!isLoading ? <Box className=" w-full sm:w-2/4 ">
                <img className=" w-[80%] object-contain" alt={product?.title} src={product?.image} />
            </Box>
                :
                <Box className="w-full md:w-2/4">
                    <LoadingSkeleton className="w-[90%] mx-auto grid" height={"500px"} number={1} />
                </Box>
            }
            {
                !isLoading ?
                    <Box className=" w-full md:w-2/4 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                        <Box className="border-b border-gray-200 pb-6">
                            <Typography
                                className=" lg:text-3xl text-2xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
                                {product?.title}
                            </Typography>
                        </Box>
                        <Box className="mt-5 flex items-center"
                        >
                            <Rating name="read-only" value={product?.rating?.rate} readOnly />
                            <span className="ml-2">{product?.rating?.count} Reviews</span>
                        </Box>
                        <Typography className="mt-5 mr-5" variant="h3">${product?.price}</Typography>

                        <Box>
                            <Typography className=" text-base lg:leading-tight leading-normal text-gray-600 mt-7">{product?.description}</Typography>
                            <Typography className="text-base leading-4 mt-7 text-gray-600">Product Code: 8BN321AF2IF0NYA</Typography>
                            <Typography className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</Typography>
                            <Typography className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</Typography>
                            <Typography className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</Typography>
                            <Typography className="md:w-96 text-base leading-normal text-gray-600 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, eaque sequi aperiam magni sunt assumenda?</Typography>
                        </Box>

                        <Box className="mt-5" display={"flex"} alignItems={"center"} flexDirection={{ xs: "column", sm: "row" }}>
                            {
                                !productInCart ?
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="mt-5 text-base flex items-center justify-center leading-none text-white bg-gray-900 w-full py-4 hover:bg-gray-800" >
                                        Add To Cart
                                    </button>
                                    :
                                    <button
                                        onClick={() => handleUpdateCart({ id: productInCart?.id, quantity: productInCart.quantity + 1 })}
                                        className="mt-5 text-base flex items-center justify-center leading-none text-white bg-gray-900 w-full py-4 hover:bg-gray-800">
                                        Update Cart
                                    </button>
                            }
                        </Box>
                    </Box>
                    :
                    <Box className="w-full md:w-2/4">   <LoadingSkeleton className="w-[90%]" height={"100px"} number={5} /> </Box>
            }
        </Box>
    );
};

