import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    isShow: boolean
}

const initialState: CartState = {
    isShow: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state, action: PayloadAction<boolean>) => {
            state.isShow = action.payload
        },
    },
})

export const { toggleCart } = cartSlice.actions
export default cartSlice.reducer
