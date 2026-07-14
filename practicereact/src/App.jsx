import { useState } from "react";
import { useEffect } from "react"



function App() {

  const[count,setCount] = useState(0);
  const[countt,setCountt] = useState(100);

  useEffect(()=>{
    console.log("Element renders");
    console.log("Button clicked");
  },[count,countt]);

  return (
   <>
   <h1>{count}</h1>
   <button onClick={()=>setCount(count + 1)}>Click</button>
   <h1>{countt}</h1>
   <button onClick={()=>setCountt(countt+2)}>Double</button>
   </>
  )
}

export default App
