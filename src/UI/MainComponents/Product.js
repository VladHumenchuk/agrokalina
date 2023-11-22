import styles from './Product.module.scss' 
import { PRODUCT } from '../../DATA/product'
import OneProduct from '../../components/mainDataComponents/OneProduct'
import { useState } from 'react'


const Product =()=>{ 
  const [activProdict, setActivProdict] = useState(false);
 

  const gruntClickHendler =()=>{
    setActivProdict(false)
  }
  const sivClickHendler =()=>{
    setActivProdict(true)
  }

const productArrow = PRODUCT.filter(event=> {
if(!activProdict){
 return event.category==='грунтообробна техніка'
} else{
 return event.category=== 'посівна техніка'
}
}).map(value=> <OneProduct key={Math.floor(Math.random() * 10001)} picture={value.picture} title={value.fullname}/>)

return <div className={styles.section}>
  <div className={styles['buttin-block']}>
    <button  className={`${!activProdict && styles['button-active']} styles['']}`} onClick={gruntClickHendler}>Грунтообробна</button>
    <button className={`${activProdict && styles['button-active']} styles['']}`} onClick={sivClickHendler}>Посівна</button>
  </div>
  <section className={styles.bloks}>
    {productArrow}
  </section>
</div>
}
export default Product