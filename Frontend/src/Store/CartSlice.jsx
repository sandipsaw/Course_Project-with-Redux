import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    LoadProduct:(state,action)=>{
        state.value = action.payload
    }
  },
})
export const {LoadProduct} = CartSlice.actions;
export default CartSlice.reducer;