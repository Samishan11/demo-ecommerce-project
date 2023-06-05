import React from "react";
import { useNavigate } from "react-router-dom"
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { ProductCart } from "./component/ProductCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import { LoadingSkeleton } from "../../components/LoadingSkeleton";
import { Box } from "@mui/material";

const width: number = 300
const height: number = 200
const number: number = 8

export const ListProduct: React.FC = () => {
    // hooks
    const navigate = useNavigate();
    // rkt query
    const { data, isLoading } = useGetProductsQuery();
    return (
        <div className="flex justify-center mt-10">
            <Box>
                {
                    isLoading && <LoadingSkeleton height={height} width={width} number={number} />
                }
            </Box>
            <Box className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cold-5 ">
                {
                    !isLoading &&
                    data?.map((product) => <ProductCart navigate={() => navigate(`/detail/${product.id}`)} key={product.id} product={product} />)
                }
            </Box>
        </div>
    );
};

