import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Order {
    pid: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
    username: string,
    email: string,
    addresh: string,
    contact: string,
    date: Date,
}

export interface OrderState {
    order: Order[],
};

const initialState: OrderState = {
    order: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToOrder: (state, action: PayloadAction<Order>) => {
            state.order.push(action.payload);
        },
    },
});