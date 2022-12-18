import { configureStore } from "@reduxjs/toolkit";
import cartredux from "./cartredux";

export default store = configureStore({
    reducer:{
        cart:cartredux,
       
    }
    
})
