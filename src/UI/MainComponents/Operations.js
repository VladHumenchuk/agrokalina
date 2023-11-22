import styles from './Operations.module.scss'
import { PRODUCT } from '../../DATA/product'
import OperationActivBlock from '../../components/mainDataComponents/OperationActivBlock';
import { NavLink, Route,Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Operations =()=>{
// відображення меню
const productMenu = PRODUCT.sort((a, b) => a.name.localeCompare(b.name)).map(event=><NavLink key={event.name} activeClassName={styles.active} to={`/operations/${event.name.toLowerCase()}`}  className={styles.li}>{event.name}</NavLink>
);
// відображення Роутів
const routUrl = productMenu.map(e=><Route key={e.key} path={`/operations/${e.key.toLowerCase()}`}><OperationActivBlock machine={e.key}/></Route>)

return <section className={styles.section}>
  <div className={styles.menu}><div className={styles.list}>{productMenu}</div></div>
  <div className={styles['active-block']}>
    <Route path='/operations'>
    <Redirect  to="/operations/antoks"/>
    </Route>
    {routUrl}
    
  </div>
</section>

}
export default Operations