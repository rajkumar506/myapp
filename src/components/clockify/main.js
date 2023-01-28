import React,{useEffect, useState} from "react";
export const Timer = ()=>{
  const [time,setTime] = useState({seconds:0,minutes:0,hour:0})
  const [handleTimer,setHandleTimer] = useState(false)
  useEffect(()=>{
      let interval
      if(handleTimer){
        interval = setInterval(()=>{
          setTime({...time,seconds:time.seconds+1})
        },1000)  
      }
      
      if(interval){
        return ()=>clearInterval(interval)
      }
  },[time,handleTimer])

  if(time.seconds>60){
    setTime({...time,minutes:time.minutes+1,seconds:0})
  }
  if(time.minutes>60){
  setTime({...time,minutes:0,hour:time.hour+1})
  }

  return(
    <><div>{time.seconds<10? "0"+time.seconds:time.seconds}:{time.minutes<10? "0"+time.minutes:time.minutes}:{"0"+time.hour}</div>
    <button onClick={()=>setHandleTimer(true)}>start</button>
    <button onClick={()=>setHandleTimer(false)}>stop</button>
    </>
    
  )
}