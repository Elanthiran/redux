import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items:[] ,
    subTotal:0,
    total:0

  },
  reducers: {
    saveAllProducts:(state,action)=>
    {
        return{...state,items:action.payload}
    },
    quantityChange:(state,action)=>{
    return{...state,
      items:state.items.map((item)=>
      {
        if(item.id!==action.payload.id)
        {
          return item;
        }

        return{
          ...item,
          quantity:action.payload.value,
        }
      })
     
        }
    },
    updateSubTotal:(state,action)=>
      {
        return{
          ...state,subTotal:action.payload,
        };

      },
      updateTotal:(state,action)=>
        {
          return{
            ...state,total:action.payload,
          };
  

    },
    removefromCart:(state,action)=>
    {

      state.items=state.items.filter(x=>x.id!==action.payload.id)
      
      
    }
  }
});


// Action creators are generated for each case reducer function
export const { saveAllProducts,quantityChange,updateSubTotal,updateTotal,removefromCart } = cartSlice.actions;
export default cartSlice.reducer;
