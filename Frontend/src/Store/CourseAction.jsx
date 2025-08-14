import axios from "../Api/AxiosConfig";
import { LoadCourse } from "./CourseSlice";

export const asyncLoadCourse = () =>async(dispatch,getState) => {
    try{
        const {data} = await axios.get("/Courses")
        dispatch(LoadCourse(data))
        
    }catch(error){
        console.log(error);
    }
}
export const asyncCreateCourse = (course) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/Courses", course)
        dispatch(asyncLoadCourse())
    } catch (error) {
        console.log(error);
    }
}