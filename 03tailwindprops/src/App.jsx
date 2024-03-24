import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  let newArr = [12,12,1222];

  return (
    <>
      <h1 className='bg-green-600 mb-6'>Tailwind test</h1>
      <Card userName="Zaki" btnText = "click me"/>
      <Card userName="Zaidi"/>

    </>
  )
}

export default App
