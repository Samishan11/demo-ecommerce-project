import React, { useState } from 'react';
import {
    Drawer,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/slice/cartSlice';

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

export const Cart: React.FC<CartPageProps> = ({ cartItems }) => {
    // rtk hooks
    const dispatch = useDispatch();
    const { isShow: cartIsShow } = useSelector((state: any) => state.cart);
    const { cart } = useSelector((state: any) => state.cart);
    console.log(cart)
    // states
    const [quantity, setQuantity] = useState<number>(1)

    // methods
    const handelToggle = () => {
        dispatch(toggleCart(!cartIsShow))
    }
    const handleQuantityChange = (id: number, quantity: number) => {
        setQuantity(quantity + 1)
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
                <div className="mt-8">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    {/* <a href={product.href}>{product.name}</a> */}
                                                </h3>
                                                <p className="ml-4">${product.price}</p>
                                            </div>
                                        </div>
                                        <div className="item-quantity flex">
                                            <button
                                                onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                                            >
                                                <i className='fa-solid fa-minus'></i>
                                            </button>
                                            <Typography className="mx-2" >
                                                Qty {quantity}
                                            </Typography>
                                            <button
                                                onClick={() => handleQuantityChange(product.id, product.quantity)}
                                            >
                                                <i className='fa-solid fa-plus'></i>
                                            </button>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">

                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

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



