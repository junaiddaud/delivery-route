import { useState } from "react"
import lowestCostRoute from "./lowestCostRoute"
const Cheapest = ({route}) => {
    const [toggle,setToggle]=useState(false)
    const [start,setStart]=useState("")
    const [end,setEnd]=useState("")
    const [count,setCount]=useState(0)
    const show=()=>{
    setToggle(!toggle)
    
    }
    const changeStart=(e)=>{
        setStart(e.target.value)
        
          }
          const changeEnd=(e)=>{
            setEnd(e.target.value)
            
              }
             
    const calculate=()=>{
      console.log(route)
     let ans=lowestCostRoute(route,start,end,route.length)
    setCount(ans)
       
        }

    return ( 
        <div>
            <button onClick={show}>Calculate Cheapest Path</button>
{toggle && <h6>Enter the Satrt point like A</h6>}
{toggle &&
<input type="text" onChange={changeStart}/>}
{toggle && <h6>Enter the End point like D</h6>}
{toggle &&
<input type="text" onChange={changeEnd}/>}
{toggle&&
<button onClick={calculate}>Calculate</button>}
{toggle &&
<h2>Cheapest Path: {count}</h2>
}



        </div>
     );
}
 
export default Cheapest;