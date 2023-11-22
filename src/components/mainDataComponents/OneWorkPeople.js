import styles from './OneWorkPeople.module.scss'

const OneWokPeople = (props)=>{
  return (
    <div className={styles.block}>
      <div>{props.name}</div>
      <div>{props.post}</div>
      <div>{props.group}</div>
    </div>
  )
}

export default OneWokPeople