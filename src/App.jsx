import { useState,useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Useeff from './Useeff'
import './App.css'
import Form from './Form'
import Signup from './signup'
import Paginationn from './Pagination'
import Posts from './Posts'

function App() {
  const [count,setCount]=useState(15)

  function Add(){
    if(count<20){
    setCount(count+1)
    }else{
      setCount(count)
    }
  }
  function Dec(){
    if(count>0){
      setCount(count-1)
    }else{
      setCount(count)
    }
    
  }
  let [state,setState]=useState(true)
  let [val,setVal]=useState('000')


  return (
    <>
    
      <Paginationn/>
      {/* <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
      <h3>{val}</h3> */}


    
    {/* {state ? <Useeff /> : ''}
    <button onClick={(e)=>setState(!state)}>toogle</button> */}
     {/* <div>Counter is {count}</div>
     <button onClick={Add}>Increase</button>
     <button onClick={Dec}>Decrease</button> */}
    </>
  )
}

export default App
