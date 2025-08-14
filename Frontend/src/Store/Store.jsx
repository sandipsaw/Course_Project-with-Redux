import { configureStore } from '@reduxjs/toolkit'
import CourseSlice from './CourseSlice'
import CartSlice from './CartSlice'
import UserSlice from './UserSlice'

export const store= configureStore ({
  reducer: {
    CourseReducer : CourseSlice,
    CartReducer : CartSlice,
    UserReducer : UserSlice
  },
})