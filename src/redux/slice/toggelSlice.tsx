import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface State {
    isShow: boolean
}
const initialState: State = {
    isShow: false
}
export const toggelSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        toggleCart: (state, actions) => {
            state.isShow = actions.payload
        },
    },
})

export const { toggleCart } = toggelSlice.actions

export default toggelSlice.reducer