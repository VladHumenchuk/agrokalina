import styles from './Workers.module.scss'
import { WORKERS } from '../../DATA/workers'
import OneWokPeople from '../../components/mainDataComponents/OneWorkPeople'
import { useState } from 'react'

const Workers =()=>{
  const [selectedFilterValue, setSelectedFilterValue] = useState('');
  const handleSelectChange = (event)=>{
    setSelectedFilterValue(event.target.value)
  }

  // Фільтер group
  const arr = []
  WORKERS.map(value=>{
    return arr.push(value.group)
  })
 const listFilterGroup = [...new Set(arr)].map(value=><option key={Math.floor(Math.random() * 10001)} value={value}>{value}</option>);


 // Відображення списку по фільтру
 const dataWorkers = WORKERS.filter(event=> {
if(selectedFilterValue.length>0){
 return event.group === selectedFilterValue
} else{
  return event
}
 }).map(people=><OneWokPeople key={people.id} name={people.name} post={people.post} group={people.group} ></OneWokPeople>)
// Зняття фільтру фільтру
const offFilterHendler = ()=>{
  setSelectedFilterValue('')
}

return <section>
  <div className={styles.filter}>
  <select  value={selectedFilterValue} onChange={handleSelectChange}>
  {listFilterGroup}
</select>
  <button onClick={offFilterHendler}>Х</button>
  </div>
  <div className={styles.section}>
  <div className={styles.title}>
    <div>Ім'я</div>
    <div>Посада</div>
    <div>Відділ</div>
  </div>
  <section className={styles.blocks}>
  {dataWorkers}
  </section>
  
</div>
  </section>
}
export default Workers