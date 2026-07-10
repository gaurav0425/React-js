import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15);
 
  // let counter = 5;

  const addvalue = ()=>{
    // console.log("value added",Math.random());
    if(counter<20){
      counter = counter + 1;
    setCounter(counter);
    console.log(counter);
    }
  }

  const removevalue = ()=>{
    if(counter>0){
    counter = counter-1;
    setCounter(counter);
    console.log(counter);
    }
  }

  //Passing parameteres
  const greet = (name)=>{
    console.log("Hello ",name);
  }


  return (
    <>
      <h1>Gaurav </h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <button onClick={removevalue}>Remove value {counter}</button>
      <p>{counter}</p>

      <button onClick={()=> greet("gaurav")}>Click me</button>
    </>
  )
}

export default App
