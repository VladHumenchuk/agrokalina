import Menu from "./Menu"
import styles from './Main.module.scss'
import  {Route} from 'react-router-dom';
import Product from './MainComponents/Product'
import Operations from './MainComponents/Operations'
import Workers from './MainComponents/Workers'
import Statistics from './MainComponents/Statistics'
import Directory from './MainComponents/Directory'
import Users from './MainComponents/Users'
import {  useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react';



const Main = () =>{
  const isShowMenuBurgerInVisible = useSelector((state)=> state.showMenuBurger.show)
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let validWindowWidth = windowWidth>689;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <main className = {styles.block}>
    <Menu onMobileMenu ={validWindowWidth}></Menu>
    <div className ={`${styles.wrapper} ${validWindowWidth&&!isShowMenuBurgerInVisible&&styles['padding-menu']} `}>
    <Route path='/' exact></Route>
    <Route  path='/product'>
      <Product></Product>
    </Route>
    <Route path='/operations'>
      <Operations></Operations>
    </Route>
    <Route path='/workers'>
    <Workers></Workers>
    </Route>
    <Route path='/statistics'>
      <Statistics></Statistics>
    </Route>
    <Route path='/directory'>
      <Directory></Directory>
    </Route>
    <Route path='/users'>
      <Users></Users>
    </Route>
    </div>
  </main>
}
export default Main