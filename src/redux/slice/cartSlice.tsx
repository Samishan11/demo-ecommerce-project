import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
interface CartItem {
  id: string;
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

const cartData = localStorage.getItem("cartItems");
const items = cartData !== null && JSON.parse(cartData);

const initialState: CartState = {
  isShow: false,
  cart: items ? items : [],
};

const saveCartProduct = (cart: CartItem[]) => {
  localStorage.setItem("cartItems", JSON.stringify(cart));
};

export const getTotalPrice = (cart: any[]) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action: PayloadAction<boolean>) => {
      state.isShow = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      console.log(action.payload);
      state.cart.push(action.payload);
      saveCartProduct(state.cart);
      toast.info("Item Added To Cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    },
    updateCart: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      console.log(action.payload);
      const { cart } = state;
      state.cart = cart.map((item) => (item.id === id ? action.payload : item));
      saveCartProduct(state.cart);
    },
    deleteCart: (state, action: PayloadAction<any>) => {
      const { id } = action.payload;
      const { cart } = state;
      state.cart = cart.filter((item) => item.id !== id);
      saveCartProduct(state.cart);
      toast.info("Item remove from cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    },
    deleteAllCartItem: (state) => {
      state.cart = [];
      saveCartProduct(state.cart);
    },
  },
});

export const {
  toggleCart,
  addToCart,
  updateCart,
  deleteCart,
  deleteAllCartItem,
} = cartSlice.actions;
export default cartSlice.reducer;
