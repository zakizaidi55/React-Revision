import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 5;

  const addValue = () => {
    // console.log("Clicked", Math.random());
    // counter = counter+1;
    // console.log("clicked", counter);
    if(counter < 20) {
      setCounter(counter+1)
    }
    else {
      setCounter(0);
    }
    
    
  }

  const removeValue = () => {
    if(counter < 1) {
      setCounter(0);
    } 

    else {
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button 
      onClick={addValue}
      >Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
