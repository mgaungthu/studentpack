import { createSlice } from "@reduxjs/toolkit";
import services from "../services";


const initialState = {
    currentstatus:[],
    loading:false
}

export const currentStatusSlice =  createSlice({
    name:"status",
    initialState,
    reducers:{
        DataRequested: (state,action) => {
            console.log(action);
            
            state.loading = action.payload.loading
        },
        DataReceived: (state,actions) => {
            state.currentstatus = actions.payload
            state.loading = false
        }
    }
})


export const {DataRequested,DataReceived} = currentStatusSlice.actions

export const getDataAsync = (action) => async (dispatch) => {
    // 
    try {
        dispatch(DataRequested(action))
        const response = await services.getCurrentPlan(); 
        
        dispatch(DataReceived(response))
    } catch (error) {
        console.log(error)
    }
}

export default currentStatusSlice.reducer