import { useState } from "react";
import calculateCost from "./calculateCost";
const Cost = ({route}) => {
const [toggle,setToggle]=useState(false)
const [input,setInput]=useState("")
const [count,setCount]=useState(0)
const show=()=>{
setToggle(!toggle)

}
const change=(e)=>{
    setInput(e.target.value)
    
      }
const calculate=()=>{
  console.log(route)
 let ans=calculateCost(route,input)
setCount(ans)
   
    }
    return ( 
        <div>


<button onClick={show}>Calculate Delivery Cost</button>
{toggle && <h6>Enter the Route like A-B-C</h6>}
{toggle &&
<input type="text" onChange={change}/>}{toggle&&
<button onClick={calculate}>Calculate</button>}
{toggle &&
<h2>Delivery Cost: {count}</h2>
}
        </div>
     );
}
 
export default Cost;