import React, { useState } from 'react';
import {
    Drawer,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/slice/cartSlice';
import { CartList } from './CartList';


export const Cart: React.FC = () => {
    // rtk hooks
    const dispatch = useDispatch();
    const { isShow: cartIsShow } = useSelector((state: any) => state.cart);
    const { cart } = useSelector((state: any) => state.cart);
    // states

    // methods
    const handelToggle = () => {
        dispatch(toggleCart(!cartIsShow))
    }

    return (
        <React.Fragment>
            <Drawer
                placement="right"
                open={cartIsShow}
                onClose={handelToggle}
                className="p-4"
            >
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Cart Items
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={handelToggle}
                    >
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <CartList cartItems={cart} />

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Checkout
                        </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or
                            <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            // onClick={() => setOpen(false)}
                            >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>
            </Drawer>

        </React.Fragment>
    );
};



