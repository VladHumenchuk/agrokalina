import './App.scss';
import { USERS } from './DATA/users';
import Header from './UI/Header';
import Main from './UI/Main';
import Authorize from './components/Authorize';
import { useState } from 'react';
import localStorage from "localStorage";  
function App() {
const[ validAuthorize, setValidAuthorize ] = useState(localStorage.getItem("open")? true : false)
const[ nameAuthorize, setNameAuthorize ] = useState(localStorage.getItem("name") || '')
// const openMainHandler = (event) =>{
// const loginUser = USERS.map(({name, password})=>{
//  if(name === event.name && password === event.password){
//   setNameAuthorize(name)
//   return true
//  } 
// }).includes(true)
// setValidAuthorize(loginUser)
// return loginUser
// }
const openMainHandler = (event) =>{
  const loginUser = USERS.map(({name, password})=>{
   if(name === event.name && password === event.password){
    setNameAuthorize(name)
    localStorage.setItem('open', true)
    localStorage.setItem('name', name)
   } 
  })
  setValidAuthorize(localStorage.getItem("open"))
  return loginUser
  }


const exitAuthorize = () =>{
  localStorage.clear();
  setValidAuthorize(false)
  setNameAuthorize('')
}

  return (
    <div className="App">
     {validAuthorize&&<Header onAuthorize ={exitAuthorize} onName={nameAuthorize} />}
     {validAuthorize&&<Main></Main>}
     {!validAuthorize&&<Authorize onOpen = {openMainHandler}></Authorize>}
    </div>
  );
}

export default App;
