import axios from '../Api/AxiosConfig'
import { LoadUser } from './UserSlice';

export const asyncgetUsers = () => async(dispatch,getState) =>{
    try{
        // console.log("CurrentState >>>>",getState());
        const res =await axios.get("/Users");
        // console.log(res.data);
        dispatch(LoadUser(res.data))
    }catch(error){
        console.log(error);
    }
}