 import { useState, } from "react";
 
function Cal(){
const [count,setCount]=useState(0)

return(
  <div>
    <button onClick={()=>setCount(count+1)}>increase</button>
    <button onClick={()=>setCount(count-1)}>decrease</button>
    <button onClick={()=>setCount(0)}>reset</button>
  </div>
)
}
export default Cal;