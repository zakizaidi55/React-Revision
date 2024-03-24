import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, SetPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) {
      str += "0123456789"
    }

    if(charAllowed) {
      str += "!@#$%^&*(){}[]~`"
    }

    for(let i=1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    SetPassword(pass);

  }, [length, numberAllowed, charAllowed, SetPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=> {
    passwordGenerator();
  },[length, numberAllowed, charAllowed])


  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-12 py-16 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow-lg rounded-lg overflow-hidden mb-4 max-w-md'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range' 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(event) => {setLength(event.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          <input 
          type='checkbox'
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {setNumberAllowed((prev) => !prev)}}
          />
          <label htmlFor='numberInput'>Number</label>
          <input 
          type='checkbox'
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => {setCharAllowed((prev) => !prev)}}
          />
          <label htmlFor='charInput'>Character</label>
      </div>
      </div>
    </>
  )
}

export default App
