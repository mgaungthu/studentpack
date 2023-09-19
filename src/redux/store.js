import { configureStore } from "@reduxjs/toolkit";
import  currentStatusSlice  from "./currentStatusSlice";
import packagesSlice from "./packagesSlice";

export const store = configureStore({
    reducer:{
        currentstatus:currentStatusSlice,
        packages:packagesSlice
    }
})