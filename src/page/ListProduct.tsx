import React from "react";
import {
    Card,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import { useGetProductsQuery } from "../redux/api/apiSlice";
import { skipToken } from '@reduxjs/toolkit/query/react'

export const ListProduct: React.FC = () => {
    let id;
    // rtkquery
    const { data } = useGetProductsQuery(id ?? skipToken)
    console.log(data)
    return (
        <div className="flex justify-center mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {
                    Array.from({ length: 6 }).map((data, ind) => {
                        return (
                            <Card className="w-80">
                                <img
                                    src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                                    className="w-full h-72 rounded-t-xl object-cover"
                                />
                                <CardBody>
                                    <div className="flex items-center justify-between mb-2">
                                        <Typography color="blue-gray" className="font-medium">
                                            Apple AirPods
                                        </Typography>
                                        <Typography color="blue-gray" className="font-medium">
                                            $95.00
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal opacity-75"
                                    >
                                        With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
                                    </Typography>
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
