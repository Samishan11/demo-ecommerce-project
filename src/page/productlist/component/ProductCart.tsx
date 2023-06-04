import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'
import React from 'react'

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface ProductCardProps {
    product: Product;
    onClick: () => void;
    navigate: () => void;
}
export const ProductCart: React.FC<ProductCardProps> = ({ product, navigate }) => {
    const { id, image, title, description, price } = product;
    return (
        <Card key={id} className="w-72 mb-5 relative mx-auto">
            <img
                src={image}
                className="w-full h-52 rounded-t-xl object-contain"
            />
            <CardBody>
                <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className=" font-semibold overflow-hidden overflow-ellipsis line-clamp-1 truncatetext-sm">
                        {title}
                    </Typography>

                </div>
                <span
                    className=" text-sm overflow-hidden overflow-ellipsis line-clamp-3 truncatetext-sm opacity-75"
                >
                    {description}
                </span>
            </CardBody>
            <CardFooter className="pt-0 h-16  ">
                <div className="absolute bottom-5 flex items-center justify-between w-[15rem]">
                    <Typography color="blue-gray" className="font-medium text-base">
                        ${price}
                    </Typography>
                    <i
                        onClick={navigate}
                        className=" rounded-full border-gray-900 h-10 w-10 flex justify-center items-center fa-solid fa-arrow-right bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                    >

                    </i>
                </div>
            </CardFooter>
        </Card>
    )
}
