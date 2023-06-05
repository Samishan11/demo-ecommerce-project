import React from 'react'
import { Link } from "react-router-dom"
import {
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../redux/slice/cartSlice';
import { Box } from '@mui/material';
export const Header: React.FC = () => {
    const dispatch = useDispatch();
    const { isShow: cartIsShow, cart } = useSelector((state: any) => state.cart);

    const handelToggle = () => {
        dispatch(toggleCart(!cartIsShow))
    }
    console.log(localStorage.getItem("cartItems"))
    return (
        <Box
            className=" w-full bg-gray-100 text-black py-3"
        >
            <Box className="flex flex-wrap items-center justify-between gap-y-4 text-gray-800">
                <Link to="/">
                    <Typography
                        as="a"
                        href="#"
                        variant="h5"
                        className="mr-4 ml-2 cursor-pointer py-1.5"
                    >
                        Demo-Ecommerce
                    </Typography></Link>

                <Box className="relative hidden gap-2 md:block md:w-96">
                    <Input
                        type="search"
                        color="black"
                        label="Type here..."
                        className="pr-20"
                        containerProps={{
                            className: "min-w-[288px]",
                        }}
                    />
                    <Button
                        size="sm"
                        color="white"
                        className="!absolute right-1 top-1 rounded"
                    >
                        Search
                    </Button>
                </Box>
                <Box className="relative flex px-5 ">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 ml-2 cursor-pointer py-1.5"
                    >
                        My Order
                    </Typography>
                    <Box className="relative">
                        <i
                            onClick={handelToggle}
                            className=" rounded-full  border-gray-900 h-10 w-10 flex justify-center items-center fa-solid fa-bag-shopping bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                        >

                        </i>
                        <span className="absolute font-serif top-0 right-2 text-sm">
                            {cart?.length}
                        </span>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
