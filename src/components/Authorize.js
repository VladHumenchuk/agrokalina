import styles from './Authorize.module.scss'
import { useState } from 'react'
import logo from '../img/logo.svg'
const Authorize = (props) =>{
const [valueName,setValueName]=useState('');
const [valuePassword,setValuePassword]=useState('');

const [validName,setValidName]=useState(false);
const [validPassword,setValidPassword]=useState(false);

const valueNameHandler = (event) =>{
 setValueName(event.target.value)
 setValidName(false)
}
const valuePasswordHandler = (event) =>{
  setValuePassword(event.target.value)
  setValidPassword(false)
 }
 const submitFormHandler = (event) =>{
  event.preventDefault()
  if(valueName.length < 1){
    setValidName(true)
  } 
  if(valuePassword.length < 1){
    setValidPassword(true)
  }
  if( !validName && !validPassword){
    props.onOpen({
      name: valueName,
      password: valuePassword
    })
  }
  setValueName('')
  setValuePassword('')
 }

return <section className={styles.section}>
  <div className={styles.logo}><img  src={logo} alt="logo"/></div>
<form onSubmit={submitFormHandler} className={styles.form}>
  <div className={styles.title}>Вхід</div>
  <div className={styles.block}>
    <label>Введіть логін:</label>
    <input value={valueName} onChange={valueNameHandler} name="name" type='text'></input>
    {validName&&<div className={styles.error}>Заповніть поле</div>}
  </div>
  <div className={styles.block}>
    <label >Введіть пароль:</label>
    <input value={valuePassword} onChange={valuePasswordHandler} name="password" type='password'></input>
    {validPassword&&<div className={styles.error}>Заповніть поле</div>}
  </div>
  <button type="submit">Увійти</button>
</form>
<div>Логін: user Пароль: 1111</div>
</section>
}
export default Authorize