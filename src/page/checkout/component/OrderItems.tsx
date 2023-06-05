import React from 'react'
import { Box } from '@mui/material'

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartPageProps {
    orderItems: CartItem[];
}

export const OrderItems: React.FC<CartPageProps> = ({ orderItems }) => {
    return (
        <Box className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            {
                orderItems.map((c, ind) => <Box className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                    <Box key={ind} className="flex flex-col rounded-lg bg-white sm:flex-row">
                        <img
                            className="m-2 h-24 w-28 rounded-md border object-contain object-center"
                            src={c.image}
                            alt={c.title}
                        />
                        <Box className="flex w-full flex-col px-4 py-4">
                            <span className="font-semibold">
                                {c.title}
                            </span>
                            <span className="float-right">x{c.quantity}</span>
                            <p className="text-lg font-bold">${c.price}</p>
                        </Box>
                    </Box>
                </Box>)
            }
        </Box>
    )
}
