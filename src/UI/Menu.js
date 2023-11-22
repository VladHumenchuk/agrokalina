import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {showMenuBurgerAction} from '../store/index'


const Menu =(props)=>{
  const isShowMenuInVisible = useSelector((state)=> state.showMenuBurger.show)

  const dispatchFunction = useDispatch();
  const showMenuBurgerHandler = ()=>{
    if(!props.onMobileMenu){
      dispatchFunction(showMenuBurgerAction.showBurger())
    }
    return
  }

  return <div className={`${styles.menu} ${isShowMenuInVisible && styles['menu-hide']} ${!props.onMobileMenu&& styles['menu-mobile'] }`}>
  <nav  className={styles.menu__body}>
    
    <ul  className={`${styles.menu__list} ${styles['menu__list-one']}`}>
      <li  className={styles.menu__item}><NavLink onClick={showMenuBurgerHandler}  to='/product'   className={styles.menu__link} activeClassName={styles.active}>Продукція</NavLink></li>
      <li   className={styles.menu__item}><NavLink  onClick={showMenuBurgerHandler} to='/operations' className={styles.menu__link}  activeClassName={styles.active}>Операції</NavLink></li>
      <li   className={styles.menu__item}><NavLink onClick={showMenuBurgerHandler}  to='/workers' className={styles.menu__link}  activeClassName={styles.active}>Працівники</NavLink></li>
      <li   className={styles.menu__item}><NavLink onClick={showMenuBurgerHandler}  to='/statistics'  className={styles.menu__link}  activeClassName={styles.active}>Статистика</NavLink></li>
    </ul>
    <ul  className={`${styles.menu__list} ${styles['menu__list-two']}`}>
      <li   className={styles.menu__item}><NavLink onClick={showMenuBurgerHandler} to='/directory'   className={styles.menu__link}  activeClassName={styles.active}>Довідник</NavLink></li>
      <li   className={styles.menu__item}><NavLink onClick={showMenuBurgerHandler}  to='/users'  className={styles.menu__link}  activeClassName={styles.active}>Користувачі</NavLink></li>
    </ul>
  </nav>
</div>
}
export default Menu