import React from "react";
import { useNavigate } from "react-router-dom"
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import { ProductCart } from "./component/ProductCart";
import { LoadingSkeleton } from "../../components/LoadingSkeleton";
import { Box } from "@mui/material";

export const ListProduct: React.FC = () => {
    // hooks
    const navigate = useNavigate();
    // rkt query
    const { data, isLoading } = useGetProductsQuery();

    return (
        <div className="flex justify-center mt-10">
            <Box>
                {
                    isLoading && <LoadingSkeleton height={"300px"} width={"300px"} number={20} className={"grid"} />
                }
            </Box>
            <Box className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    !isLoading &&
                    data?.map((product) => <ProductCart navigate={() => navigate(`/detail/${product.id}`)} key={product.id} product={product} />)
                }
            </Box>
        </div>
    );
};

