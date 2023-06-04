import React from "react";
import {
    Card,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import { useGetProductsQuery } from "../redux/api/apiSlice";

export const ListProduct: React.FC = () => {
    const { data } = useGetProductsQuery()
    return (
        <div className="flex justify-center mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {
                    data?.map((product) => {
                        return (
                            <Card key={product.id} className="w-80">
                                <img
                                    src={product.image}
                                    className="w-full h-72 rounded-t-xl object-cover"
                                />
                                <CardBody>
                                    <div className="flex items-center justify-between mb-2">
                                        <Typography color="blue-gray" className="font-medium">
                                            {product.title}
                                        </Typography>
                                        <Typography color="blue-gray" className="font-medium">
                                            {product.price}
                                        </Typography>
                                    </div>
                                    <span
                                        className="font-normal overflow-hidden overflow-ellipsis line-clamp-3 truncatetext-sm opacity-75"
                                    >
                                        {product.description}
                                    </span>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                                    >
                                        Add to Cart
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
    );
}
