import { Typography } from '@material-tailwind/react'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteCart, updateCart } from '../../redux/slice/cartSlice';
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
    // rtk hooks
    const dispatch = useDispatch()

    // states
    const [quantity, setQuantity] = useState<any>(1)

    useEffect(() => {
        setQuantity(
            cartItems?.map(c => c.quantity) ||
            Array(cartItems.length).fill(0)
        );
    }, [cartItems]);

    const handleQuantityChange = async (data: any, action: string, ind: number) => {
        const updatedQuantities = [...quantity];
        if (action === "increase") {
            updatedQuantities[ind] += 1
            const body = {
                ...data,
                id: data.id,
                quantity: updatedQuantities[ind]
            }
            dispatch(updateCart(body))

        } else if (action === "decrease" && updatedQuantities[ind]) {
            console.log(updatedQuantities[ind])
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



    return (
        <div className="mt-8">
            <div className="flow-root">
                <ul role="list" className="-my-6 divide-y h-screen overflow-auto divide-gray-200">
                    {cartItems.map((c, ind) => (
                        <li key={ind} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    src={c.image}
                                    alt={c.title}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                            {/* <a href={product.href}>{product.name}</a> */}
                                        </h3>
                                        <p className="ml-4">${c.price}</p>
                                    </div>
                                </div>
                                <div className="item-quantity flex">
                                    <button
                                        onClick={() => handleQuantityChange(c, "decrease", ind)}
                                    >
                                        <i className='fa-solid fa-minus'></i>
                                    </button>
                                    <Typography className="mx-2" >
                                        Qty {quantity}
                                    </Typography>
                                    <button
                                        onClick={() => handleQuantityChange(c, "increase", ind)}
                                    >
                                        <i className='fa-solid fa-plus'></i>
                                    </button>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">

                                    <div className="flex">
                                        <button
                                            onClick={() => dispatch(deleteCart({ pid: c.pid }))}
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
                <div className="border-t w-full left-0 absolute bottom-0 bg-gray-100 border-gray-200 px-4 py-6">
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
            </div>
        </div>
    )
}
