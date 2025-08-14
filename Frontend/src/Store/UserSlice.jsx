import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    LoadUser:(state,action)=>{
        state.value = action.payload
        // console.log(action.payload);
        // console.log(state.value);
        
    }
  },
})
export const {LoadUser} = UserSlice.actions;
export default UserSlice.reducer;