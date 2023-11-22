import styles from './Header.module.scss'
import logo from '../img/logo.svg'
import logoMini from '../img/logo-mini.svg'
import Container from '../components/Container'

import { useDispatch, useSelector } from 'react-redux'
import {showMenuBurgerAction} from '../store/index'
import React, { useEffect, useState } from 'react';

const Header =(props)=>{
  const dispatchFunction = useDispatch();
  const isShowMenuBurgerInVisible = useSelector((state)=> state.showMenuBurger.show)
  const showMenuBurgerHandler = ()=>{
    dispatchFunction(showMenuBurgerAction.showBurger())
  }

// Зміна бургера при зміні ширини вюпорта
const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
useEffect(() => {
  const handleResize = () => {
    const newViewportWidth = window.innerWidth;
    setViewportWidth(newViewportWidth);
    if (newViewportWidth > 991) {
      dispatchFunction(showMenuBurgerAction.showBurger(false))
    }
  };
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


return <header className= {styles.header} >
<Container className= {styles.header__container} >
  <button onClick={showMenuBurgerHandler} type= 'button'  className= {`${styles['menu__icon']} ${styles['icon-menu']} ${!isShowMenuBurgerInVisible&&styles['menu-open']}`}><span></span></button>
<div className= {styles.header__logo} >
  <img className={ styles['header__logo-max']}  src= {logo}  alt='logo'/>
  <img className= {styles['header__logo-mini']}  src={logoMini} alt='logo'/>
</div>
<div className= {styles.header__action} >
  <div className= {styles.header__user} >{props.onName}</div>
  <button onClick={props.onAuthorize} type= 'button'  className= {styles.header__button} ><span>Вийти</span></button>
</div>  
</Container>
</header>
}
export default Header