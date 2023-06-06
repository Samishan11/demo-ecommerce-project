import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Order {
    id: string;
    cart: {
        pid: number;
        title: string;
        price: number;
        quantity: number;
        image: string;
    }[]
    username: string,
    email: string,
    address: string,
    contact: string,
    orderAt: string;
    totalPrice: number
    card: {
        cardnumber: number,
        date: string,
        cvv: number,
    }
}

export interface OrderState {
    order: Order[],
};

const orderItems = localStorage.getItem("orderItems")
const items = orderItems !== null && JSON.parse(orderItems)
const initialState: OrderState = {
    order: items ? items : []
}


const saveOrder = (cart: Order[]) => {
    localStorage.setItem("orderItems", JSON.stringify(cart));
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Order>) => {
            console.log(action.payload)
            state.order.push(action.payload);
            saveOrder(state.order)
        },
    },
});
export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
