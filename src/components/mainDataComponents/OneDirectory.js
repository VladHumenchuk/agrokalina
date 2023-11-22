import styles from './OneDirectory.module.scss'
import { useState } from 'react'
const OneDirectory =(props)=>{
const [activAcardion, setActivAcardion] = useState(false)

const acardionClickHendler = () =>{
  setActivAcardion(!activAcardion)
}
return <div className={`${styles.block} }`}>
<button onClick={acardionClickHendler} className={`${styles.accordion} ${activAcardion&& styles.active}`}>{props.title}</button>
<div className={`${styles.panel} ${activAcardion?styles['panel-active']:styles['panel-hiden']}`}>
  <p>{props.text}</p>
</div>
</div>
}
export default OneDirectory