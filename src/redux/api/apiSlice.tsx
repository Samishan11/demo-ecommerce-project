import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
    tagTypes: ["Product", "Order", "Product", "Cart", "Notification"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (body) => ({
                url: `/?limit=5/`,
                body,
                providesTags: () => [{ type: 'Product', id: "LIST" }],
            }),
        }),

    }),
})

export const { useGetProductsQuery } = apiSlice;