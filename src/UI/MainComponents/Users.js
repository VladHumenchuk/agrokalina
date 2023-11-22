import { USERS } from '../../DATA/users'
import styles from './Users.module.scss'

const Users =()=>{
const userPages = USERS.map(value=><div key={Math.random()*1000} className={`${styles.user} ${styles['user-activ']}`}>{value.name}</div>)
return <section className={styles.section}>
  <div className={styles.title}>Користувачі платформи</div>
  <div className={styles.block}>{userPages}</div>
</section>
}
export default Users