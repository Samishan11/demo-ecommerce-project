import React, { useState } from 'react'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllCartItem, getTotalPrice } from '../../../redux/slice/cartSlice'
import { ConfirmModal } from '../../../components/ConfirmModal'
import { useForm } from "react-hook-form";
import { addOrder } from '../../../redux/slice/orderSlice'

type Inputs = {
    email: string,
    address: string,
    contact: string,
    username: string,
    card: {
        cardnumber: number,
        date: Date,
        cvc: number,
    }
};

export const CheckoutForm: React.FC = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state: any) => state.cart)
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const totalPrice = getTotalPrice(cart)
    const submitForm = (data: any) => {
        const formData = { ...data }
        const payload = {
            ...cart,
            ...formData,
            totalPrice,
            orderAt: new Date().toDateString()
        }
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            handleClose()
            dispatch(addOrder(payload))
            dispatch(deleteAllCartItem())
        }, 3000)
    }

    return (
        <Box className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Checkout Form</p>

            <Box className="">
                <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                    Email
                </label>
                <Box className="relative">
                    <input
                        {...register("email", { required: true })}
                        type="text"
                        id="email"
                        name="email"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@gmail.com"
                    />
                    {errors.email && <p className='text-danger'>This field is required</p>}
                    <Box className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

                    </Box>
                </Box>
                <label
                    htmlFor="username"
                    className="mt-4 mb-2 block text-sm font-medium"
                >
                    Card Holder
                </label>
                <Box className="relative">
                    <input
                        {...register("username", { required: true })}
                        type="text"
                        id="username"
                        name="username"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your full name here"
                    />
                    {errors.username && <p className='text-danger'>This field is required</p>}
                    <Box className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

                    </Box>
                </Box>
                <label
                    htmlFor="address"
                    className="mt-4 mb-2 block text-sm font-medium"
                >
                    Address
                </label>
                <Box className="relative">
                    <input
                        {...register("address", { required: true })}
                        type="text"
                        id="address"
                        name="address"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your full name here"
                    />
                    {errors.address && <p className='text-danger'>This field is required</p>}
                    <Box className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

                    </Box>
                </Box>
                <label
                    htmlFor="contact"
                    className="mt-4 mb-2 block text-sm font-medium"
                >
                    Phone
                </label>
                <Box className="relative">
                    <input
                        {...register("contact", { required: true })}
                        type="number"
                        id="contactr"
                        name="contact"
                        className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Phone number"
                    />
                    {errors.contact && <p className='text-danger'>This field is required</p>}
                    <Box className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

                    </Box>
                </Box>
                <label
                    htmlFor="card.cardnumber"
                    className="mt-4 mb-2 block text-sm font-medium"
                >
                    Card Details
                </label>
                <Box className="flex">
                    <Box className="relative w-7/12 flex-shrink-0">
                        <input
                            {...register("card.cardnumber", { required: true })}
                            type="text"
                            id="card.cardnumber"
                            name="card.cardnumber"
                            className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                        />
                        {errors.card?.cardnumber && <p className='text-danger'>This field is required</p>}
                        <Box className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

                        </Box>
                    </Box>
                    <input
                        {...register("card.date")}
                        type="date"
                        name="card.date"
                        className="w-full mx-1 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="MM/YY"
                    />
                    {errors.card?.date && <p className='text-danger'>This field is required</p>}
                    <input
                        {...register("card.cvc")}
                        type="text"
                        name="card.cvc"
                        className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="CVC"
                    />
                    {errors.card?.cvc && <p className='text-danger'>This field is required</p>}
                </Box>

                {/* Total */}
                <Box className="mt-6 border-t border-b py-2">
                    <Box className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Subtotal</p>
                        <p className="font-semibold text-gray-900">${getTotalPrice(cart)}</p>
                    </Box>
                    <Box className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Shipping</p>
                        <p className="font-semibold text-gray-900">$0.00</p>
                    </Box>
                </Box>
                <Box className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">${getTotalPrice(cart)}</p>
                </Box>
            </Box>
            <button onClick={handleShow} className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
                Confirm Order
            </button>
            <ConfirmModal title={"Order Confirmation"} subtitle={"Are you sure to make a order confirm."} onClick={handleSubmit((data) => submitForm(data))} onCancel={handleClose} show={show} isLoading={loading} />
        </Box>

    )
}
