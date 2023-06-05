import { Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
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
    const [quantity, setQuantity] = useState<number>(1)

    const handleQuantityChange = (id: number, quantity: number) => {
        setQuantity(quantity + 1)
    }

    return (
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
    )
}
