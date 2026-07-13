import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const[length,setLength] = useState(8);
  const[numAllowed,setNumAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[Password,setPassword] = useState("");

  //useref hook
  const passwordref = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str+= "0123456789";
    if(charAllowed) str+= "!@#$%^&*-_+=[]{}~`";

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() *str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numAllowed,charAllowed,setPassword]);

  const copyPasswordtoClipboard = useCallback(()=>{
    passwordref.current?.select
    window.navigator.clipboard.writeText(Password)
  },[Password]);

  useEffect(()=>{
    passwordGenerator(); 
  },[length,numAllowed,charAllowed,passwordGenerator]);
  return (
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={Password}
        className='outline-none w-80 py-1 px-2'
        placeholder='password'
        readOnly
        ref={passwordref}
         />
         <button 
         onClick={copyPasswordtoClipboard}
         className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length = {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={()=>{
            setNumAllowed((prev) => !prev); 
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev) => !prev); 
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
     </div>
  )
}

export default App
