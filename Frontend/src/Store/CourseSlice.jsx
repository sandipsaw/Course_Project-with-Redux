import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const CourseSlice = createSlice({
  name: 'Course',
  initialState,
  reducers: {
    LoadCourse:(state,action)=>{
        state.value = action.payload
        console.log(action.payload);
        
    }
  },
})
export const {LoadCourse} = CourseSlice.actions;
export default CourseSlice.reducer;