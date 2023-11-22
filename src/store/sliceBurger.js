import { createSlice } from "@reduxjs/toolkit";

export const showMenuBurgerSlice = createSlice({
  name: 'showMenuBurger',
  initialState: {show:false},
  reducers: {
    showBurger(state, action){
      if(action.payload === false){
        state.show = action.payload;
      }
      else{
        state.show = !state.show;
      }
      
    },
  }
})