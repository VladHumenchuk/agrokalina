import { PRODUCT } from '../../DATA/product'
import styles from './OperationActivBlock.module.scss'
import { useState } from 'react'
const OperationActivBlock = (props) => {

  

const [infoMachine] = PRODUCT.filter(event=>event.name===props.machine)
const [selectedFilterValue, setSelectedFilterValue] = useState(infoMachine.species[0].name);
const handleSelectChange = (event)=>{
  setSelectedFilterValue(event.target.value)
}
const listModelGroup = infoMachine.species.map(value=>{
 
return<option key={Math.floor(Math.random() * 10001)} value={value.name}>{value.name}</option>});

const [showOperations] = infoMachine.species.filter(e=>e.name===selectedFilterValue);
const showOperationsList= showOperations.operations.map(value=><li key={Math.random()*1000} className={styles.operation}>{value}</li>)

  return <div className={styles.section}>
    <div className={styles.filter}>
      <div className={styles.subtitle}>Виберіть модель:</div>
      <select  value={selectedFilterValue} onChange={handleSelectChange}>
       {listModelGroup}
      </select> 
    </div>
    <section className={styles.content}>
      <ul className={styles.operations}>
        {showOperationsList}
      </ul>
    </section>
  </div>
}
export default OperationActivBlock