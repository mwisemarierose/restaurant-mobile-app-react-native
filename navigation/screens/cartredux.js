import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },

    reducers: {
        addfood: (state, action) => {
            // console.log(action.payload._id)
            const food = action.payload
            //  console.log(food._id);
            // console.log(state.cart);
            const finds = state.cart.find(item => item._id === food._id)
            //  console.log(finds);
            if (finds) {
                state.cart = state.cart.map((item) => {
                    if (item._id === food._id) {
                        item.quantity+=1
                        return  item
                    }
                     else {
                        return item
                    }
                })
            } else {
                state.cart = [
                    ...state.cart,
                    {
                        ...food,
                    }
                ]
            }
            

        },
        increment(state,  action ) {
            const food = action.payload
            return state.cart.map((item) =>
              item._id === food.payload
                ? {
                    item,
                    quantity: item.quantity + 1,
                  }
                : item
            );
            
          },
          changeQty:(state,action) =>{
            // console.log(state.cart)
            const findProduct = state.cart?.find(
                (item) => item._id === action.payload.item._id
              );
              if (findProduct) {
                 state.cart = state.cart.map((item) =>{
                if(item._id === action.payload.item._id){
                    item.quantity += 1;
                    return item
                }
                else{
                    return item
                }
                    
                
                }
                )
            }
        },

        changeQuantity:(state,action) =>{
            
            const findProduct = state.cart?.find(
                (item) => item._id === action.payload.item._id
              );
              if (findProduct) {
                 state.cart = state.cart.map((item) =>{
                if(item._id === action.payload.item._id){
                    item.quantity -= 1;
                    return item
                }
                else{
                    return item
                }
                }
                )
            }
        },
        
             
        }
    })
    export const{addfood,increment,changeQty,changeQuantity}=cartSlice.actions;
    export default cartSlice.reducer