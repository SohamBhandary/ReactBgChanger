import { useState } from "react"



function App() {
  const[color,setColor]=useState("olive")
  

  return (
    <>
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
  <div className="fixed bottom-12 inset-x-0 px-2 flex justify-center">
    <div className="flex justify-center items-center gap-3 shadow-lg bg-white p-4 rounded-lg">
    <button className="outline-none px-4 py-1 rounded-full text-white" 
    style={{background:"red"}} onClick={()=>{setColor("red")}}>
      Red
    </button>
     <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"blue"}}
      onClick={()=>{setColor("blue")}}
     
     >
      Blue
    </button>
     <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"green"}}
      onClick={()=>{setColor("green")}}>
      Green
    </button>
     <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"orange"}}
           onClick={()=>{setColor("orange")}}
     >
      Orange
    </button>
    <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"pink"}}
          onClick={()=>{setColor("pink")}}>
      Pink
    </button>
    </div>
  </div>
</div>

     
    </>
  )
}

export default App
