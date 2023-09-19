import { createSlice } from "@reduxjs/toolkit";
import services from "../services";


const initialState = {
    allpackages:[],
    loading:false
}


export const packagesSlice =  createSlice({
    name:"pack",
    initialState,
    reducers:{
        DataRequested: (state) => {
            state.loading = true
        },
        DataReceived: (state,actions) => {
            state.allpackages = actions.payload
            state.loading = false
        }
    }
})

export const {DataRequested,DataReceived} = packagesSlice.actions


export const getPackagesAsync = () => async (dispatch) => {
     
    try {
        dispatch(DataRequested())
        const response = await services.getAllPlan();
        
        dispatch(DataReceived(response))
    } catch (error) {
        console.log(error)
    }
}

export default packagesSlice.reducer