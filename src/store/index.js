import { configureStore } from "@reduxjs/toolkit";
import {showMenuBurgerSlice} from './sliceBurger';

const store = configureStore({
  reducer:{
    showMenuBurger: showMenuBurgerSlice.reducer,

  }
})
export const  showMenuBurgerAction =  showMenuBurgerSlice.actions


export default store