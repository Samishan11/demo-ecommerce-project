import { Box } from '@mui/material'
import React from 'react'
import { OrderItems } from './component/OrderItems'
import { CheckoutForm } from './component/CheckoutForm'
import { useSelector } from 'react-redux'

export const Checkout: React.FC = () => {
    const { cart } = useSelector((state: any) => state.cart)
    return (
        <Box marginTop={2}>
            <Box className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <CheckoutForm />
                <OrderItems orderItems={cart} />
            </Box>
        </Box>

    )
}
