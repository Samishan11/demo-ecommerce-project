
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
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

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => ({
                url: '?limit=20',
            }),
            providesTags: ['Product'],
        }),
        getSingleProduct: builder.query<Product, string>({
            query: (id: string) => ({
                url: `/${id}`,
            }),
            providesTags: ['Product'],
        }),
    }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = apiSlice;
