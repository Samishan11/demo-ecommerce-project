import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
export interface CartItem {
    pid: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartState {
    isShow: boolean;
    cart: CartItem[];
}

const cartData = localStorage.getItem("cartItems")
const items = cartData !== null && JSON.parse(cartData)

const initialState: CartState = {
    isShow: false,
    cart: items ? items : []
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
            toast.info("Item Added To Cart", { position: toast.POSITION.BOTTOM_RIGHT })
        },
        updateCart: (state, action: PayloadAction<any>) => {
            const { pid } = action.payload;
            console.log(action.payload)
            const { cart } = state;
            state.cart = cart.map(item =>
                item.pid === pid ? action.payload : item
            );
            saveCartProduct(state.cart);
            toast.info("Cart updated", { position: toast.POSITION.BOTTOM_RIGHT })
        },
        deleteCart: (state, action: PayloadAction<any>) => {
            console.log(action.payload)
            const { pid } = action.payload
            const { cart } = state;
            state.cart = cart.filter(item =>
                item.pid !== pid
            );
            saveCartProduct(state.cart);
            toast.info("Item remove from cart", { position: toast.POSITION.BOTTOM_RIGHT })
        },
    },
});

export const { toggleCart, addToCart, updateCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
