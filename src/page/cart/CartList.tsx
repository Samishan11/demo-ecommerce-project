import { Typography } from '@material-tailwind/react'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getTotalPrice, toggleCart, updateCart } from '../../redux/slice/cartSlice';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartPageProps {
    cartItems: CartItem[];
}

export const CartList: React.FC<CartPageProps> = ({ cartItems }) => {
    const navigate = useNavigate()
    // rtk hooks
    const dispatch = useDispatch()
    const { isShow } = useSelector((state: any) => state.cart)

    // states
    const [quantity, setQuantity] = useState<any>(0)
    useEffect(() => {
        const quantities = cartItems.map((item) => item.quantity);
        setQuantity(quantities);
    }, [cartItems]);

    const handleQuantityChange = async (data: any, action: string, ind: number) => {
        const updatedQuantities = [...quantity];
        if (action === "increase") {
            updatedQuantities[ind] += 1
            const body = {
                ...data,
                id: data.pid,
                quantity: updatedQuantities[ind]
            }
            dispatch(updateCart(body))

        } else if (action === "decrease" && updatedQuantities[ind]) {
            if (updatedQuantities[ind] <= 1) {

                dispatch(deleteCart({ pid: data?.pid }))
            }
            updatedQuantities[ind] -= 1;
            const body = {
                ...data,
                id: data.id,
                quantity: updatedQuantities[ind]
            }

            dispatch(updateCart(body))

        }
        setQuantity(updatedQuantities)
    }
    const totalPrice = getTotalPrice(cartItems);
    const handelNavigate = () => {
        dispatch(toggleCart(!isShow))
        navigate(`/checkout`)
    }
    return (
        <Box className="mt-8">
            <Box className="flow-root">
                <ul className="overflow-y-scroll">
                    {
                        cartItems?.length > 0 ? cartItems.map((c, ind: number) => (
                            <li key={ind} className="flex py-6">
                                <Box className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        className="h-24 w-24 max-w-full rounded-lg object-contain"
                                        src={c.image}
                                        alt={c.title}
                                    />
                                </Box>

                                <Box className="ml-4 flex flex-1 flex-col">
                                    <Box>
                                        <Box className="flex justify-between text-base font-medium text-gray-900">
                                            <span className='text-[1rem] overflow-hidden overflow-ellipsis line-clamp-1 truncatetext-sm'>
                                            </span>
                                            <p className="ml-4">${c.price}</p>
                                        </Box>
                                    </Box>
                                    <Box className="item-quantity flex">
                                        <button
                                            onClick={() => handleQuantityChange(c, "decrease", ind)}
                                        >
                                            <i className='fa-solid fa-minus'></i>
                                        </button>
                                        <Typography className="mx-2" >
                                            {quantity[ind]}
                                        </Typography>
                                        <button
                                            onClick={() => handleQuantityChange(c, "increase", ind)}
                                        >
                                            <i className='fa-solid fa-plus'></i>
                                        </button>
                                    </Box>
                                    <Box className="flex flex-1 items-end justify-between text-sm">

                                        <Box className="flex">
                                            <button
                                                onClick={() => dispatch(deleteCart({ pid: c.pid }))}
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Remove
                                            </button>
                                        </Box>
                                    </Box>
                                </Box>
                            </li>
                        )) :
                            <Box>Cart is Empty</Box>
                    }
                </ul>
                <Box className="border-t w-full left-0 absolute bottom-0 bg-gray-100 border-gray-200 px-4 py-6">
                    <Box className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                    </Box>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <Box className="mt-6">
                        <button
                            onClick={handelNavigate}
                            className="flex w-full  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Checkout
                        </button>
                    </Box>
                    <Box className="mt-6 flex flex-col justify-center text-center text-sm text-gray-500">
                        <p>
                            or
                        </p>
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
