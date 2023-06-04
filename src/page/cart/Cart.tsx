import React from 'react';

interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

interface CartPageProps {
    cartItems: CartItem[];
}

const Cart: React.FC<CartPageProps> = ({ cartItems }) => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="flex flex-col">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center bg-white rounded-md shadow-md mb-4"
                        >
                            <div className="w-1/4 p-4">
                                <img
                                    src="/path/to/product-image.jpg"
                                    alt={item.title}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                            <div className="flex-grow p-4">
                                <h2 className="text-xl font-semibold">{item.title}</h2>
                                <p className="text-gray-600">${item.price}</p>
                                <div className="flex items-center mt-2">
                                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-xl font-semibold">
                                    ${item.quantity * item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
