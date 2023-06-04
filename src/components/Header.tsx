import React from 'react'
import {
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";
export const Header: React.FC = () => {
    return (
        <div
            className=" w-full bg-gray-100 text-black py-3"
        >
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-gray-800">
                <Typography
                    as="a"
                    href="#"
                    variant="h5"
                    className="mr-4 ml-2 cursor-pointer py-1.5"
                >
                    Demo-Ecommerce
                </Typography>

                <div className="relative flex w-full gap-2 md:w-96">
                    <Input
                        type="search"
                        color="black"
                        label="Type here..."
                        className="pr-20"
                        containerProps={{
                            className: "min-w-[288px]",
                        }}
                    />
                    <Button
                        size="sm"
                        color="white"
                        className="!absolute right-1 top-1 rounded"
                    >
                        Search
                    </Button>
                </div>
                <div className="relative flex px-5 ">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 ml-2 cursor-pointer py-1.5"
                    >
                        My Order
                    </Typography>
                    <i
                        className=" rounded-full border-gray-900 h-10 w-10 flex justify-center items-center fa-solid fa-bag-shopping bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                    >

                    </i>
                </div>
            </div>
        </div>
    )
}
