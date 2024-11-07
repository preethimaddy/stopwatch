import './App.css';
import { useState,useEffect } from 'react';
function App() {

  const[time,setTime] = useState(0);
  const [running, setRunning] = useState(false)

  useEffect(()=>{
   let interval;
    if(running){
       interval=setInterval(()=>{
        setTime((prevTime)=> prevTime + 10)
      }, 10)
    } 
    else if(!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[running]);

  return (
  <>
  <div className='flex flex-col items-center justify-center py-8'>
    <h1 className='text-2xl font-semibold'>Stop Watch</h1>
   <div>
   <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
   <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}:</span>
   <span>{("0" + (time/10) % 100).slice(-2)}:</span>
   </div>
   <div className='w-1/3 max-w-sm flex flex-row justify-between'>
    {running ? (  
      <button 
      className='border rounded-lg py-1 px-3.5'
    onClick={() =>setRunning(false)}>
      Stop
      </button>
       ):(
  <button 
  className='bg-green-500 hover:bg-green-700 focus:bg-green-600 active:bg-green-800 border rounded-lg py-1 px-3'
  onClick={() =>setRunning(true)}>
    Start
    </button>)}

 
    <button 
    className='bg-red-500 hover:bg-red-700 focus:bg-red-600 active:bg-red-800 border rounded-lg py-1 px-2.5' 
    onClick={() =>setTime(0)}>Reset</button>
   </div>
   </div>
  </>

  );
}

export default App;
