import everyPossibleRoute from "./everyPossibleRoute"
import { useState } from "react"
const PossibleRoutes = ({route}) => {
    const [toggle,setToggle]=useState(false)
    const [start,setStart]=useState("")
    const [end,setEnd]=useState("")
    const [stops,setStops]=useState(0)
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
              const changeNumber=(e)=>{
                setStops(e.target.value)
                
                  }
    const calculate=()=>{
     let ans=everyPossibleRoute(route,start,end,stops)
    setCount(ans)
       
        }


    return ( <div>

<button onClick={show}>Calculate Every Possible Paths</button>
{toggle && <h6>Enter the Satrt point like A</h6>}
{toggle &&
<input type="text" onChange={changeStart}/>}
{toggle && <h6>Enter the End point like D</h6>}
{toggle &&
<input type="text" onChange={changeEnd}/>}
{toggle && <h6>Enter the number of stops like 4</h6>}
{toggle &&
<input type="number" onChange={changeNumber}/>}
{toggle&&
<button onClick={calculate}>Calculate</button>}
{toggle &&
<h2>Cost of Path: {count}</h2>
}




    </div> );
}
 
export default PossibleRoutes;