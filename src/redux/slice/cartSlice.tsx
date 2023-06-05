import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartState {
    isShow: boolean;
    cart: CartItem[];
}

const initialState: CartState = {
    isShow: false,
    cart: [],
};

const saveCartProduct = (cart: CartItem[]) => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state, action: PayloadAction<boolean>) => {
            state.isShow = action.payload;
        },
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.cart.push(action.payload);
            saveCartProduct(state.cart);
        },
        updateCart: (state, action: PayloadAction<CartItem>) => {
            const { cart } = state;
            state.cart = cart.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
            saveCartProduct(state.cart);
        },
        deleteCart: (state, action: PayloadAction<CartItem>) => {
            const { cart } = state;
            state.cart = cart.filter(item =>
                item.id !== action.payload.id
            );
            saveCartProduct(state.cart);
        },
    },
});

export const { toggleCart, addToCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
