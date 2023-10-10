import { useEffect, useRef, useState } from "react";


function App() {
  const[length,setLength]=useState(6)
  const [Password,setPassword]=useState("")
  const[allowedChar,setChar]=useState(false)
  const [allowedNum,setNum]=useState(false)
  const refrence=useRef("")
  useEffect(()=>{
     let pas=""
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(allowedChar){
      str+="!@#$%^&*()<>?"
     }
     for(let i=1; i<=length; i++){
      let char=Math.floor(Math.random()*str.length)
      pas+=str.charAt(char)

     }
     setPassword(pas)
  },[length,allowedChar,allowedNum])
  const Handler=()=>{
    refrence.current.select()
    window.navigator.clipboard.writeText(Password)
  }
 
  return (
    <>
      
           <h1>Password Generator</h1>
           <div className="main">
           <div className="section">
            <input type="text"   ref={refrence} placeholder="Enter your value" value={Password} className="input"/>
            <button onClick={Handler}>Copy</button>
            <br/>
            <br/>
            <div className="check">
            <input type="range" min={6}  onChange={(e)=>setLength(e.target.value)} className="range"/>
            <h3>{`length (${length})`} </h3>
         
            <input type="checkbox"
             onChange={()=>{
              setNum((pre)=>!pre)
            }} />
               <label>Numbers</label>
          
            <input type="checkbox" onChange={()=>{
              setChar((pre)=>!pre)
            }}/>
              <label>characters</label>
            </div>
</div>
           </div>

    </>
  )
}

export default App
