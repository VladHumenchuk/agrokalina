import styles from './OneProduct.module.scss'

const OneProduct = (props)=>{
  return (
    <div className={styles.block}>
      <div className={styles.picture}>
        <img src={props.picture} alt="picture"/>
      </div>
      <div className={styles.text}> 
      <div className={styles.title}>{props.title}</div>
      </div>
    </div>
  )
}

export default OneProduct