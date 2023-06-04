import React from "react";
import { useParams } from "react-router-dom"
import { Typography } from "@material-tailwind/react";
import { useGetSingleProductQuery } from "../../redux/api/apiSlice";


export const ProductDetail: React.FC = () => {
    const { id } = useParams();
    // rtk query
    const { data: product } = useGetSingleProductQuery(String(id));
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className=" w-full sm:w-2/4 ">
                <img className=" w-[80%]" alt="img of a girl posing" src={product?.image} />
            </div>
            <div className=" w-full md:w-2/4 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <Typography
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        {product?.title}
                    </Typography>
                </div>
                {/* <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <Typography className="text-base leading-4 text-gray-800">Colours</Typography>
                    <div className="flex items-center justify-center">
                        <Typography className="text-sm leading-none text-gray-600">Smoke Blue with red accents</Typography>
                        <div
                            className="
								w-6
								h-6
								bg-gradient-to-b
								from-gray-900
								to-indigo-500
								ml-3
								mr-4
								cursor-pointer
							"
                        ></div>
                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div> */}
                {/* <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <Typography className="text-base leading-4 text-gray-800">Size</Typography>
                    <div className="flex items-center justify-center">
                        <Typography className="text-sm leading-none text-gray-600 mr-3">38.2</Typography>
                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div> */}

                <div>
                    <Typography className=" text-base lg:leading-tight leading-normal text-gray-600 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</Typography>
                    <Typography className="text-base leading-4 mt-7 text-gray-600">Product Code: 8BN321AF2IF0NYA</Typography>
                    <Typography className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</Typography>
                    <Typography className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</Typography>
                    <Typography className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</Typography>
                    <Typography className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</Typography>
                </div>
                <button
                    className="
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-900
						w-full
						py-4
						hover:bg-gray-800
					"
                >

                    Check availability in store
                </button>

            </div>
        </div>
    );
};

