import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}


export interface CartState {
    isShow: boolean,
    cart: CartItem[]
}

const initialState: CartState = {
    isShow: false,
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state, action: PayloadAction<boolean>) => {
            state.isShow = action.payload
        },
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.cart.push(action.payload)
        }
    },
})

export const { toggleCart, addToCart } = cartSlice.actions
export default cartSlice.reducer
