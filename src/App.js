import './App.css';
import {useState} from 'react'
import Cost from './Cost';
import PossibleRoutes from './PossibleRoutes';
import Cheapest from './Cheapest';
function App() {
  const [route,setRoute]=useState([])
  //'AB1', 'AC4', 'AD10',' BE3', 'CD4', 'CF2',' DE1', 'EB3', 'EA2', 'FD1'
  const [input,setInput]=useState("")
  const addRoute=()=>{
  setRoute([...route,input])
  setInput("")

  }
  const change=(e)=>{
setInput(e.target.value)

  }

  return (
    <div className="App">
     <h1>Delivery Route Service</h1>
     <label>Enter the route like AB1(one at a time): </label>
     <input type="text" value={input}onChange={change} />
     <button onClick={addRoute}>Add Route</button>
     
    <br/>
      {route.map(i=><span key={i}>{i}, </span> )}

    
    <Cost route={route} />
    <PossibleRoutes route={route}/>
   <Cheapest route={route} />
   <div className='footer'>
    <h4>
      Created By <a href='https://github.com/junaiddaud' target='_blank'>Junaid Daud Balouch</a>
    </h4>
   </div>
    </div>
  );
}

export default App;
