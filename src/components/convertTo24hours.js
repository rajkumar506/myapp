import React, { useState } from "react";
const inputs = [
    "12:10AM",
    "5:49AM",
    "12:10PM",
    "1:10PM",
    "10:10PM"
  ];

export const ConvertFormat = ()=>{
    const [time,setTime] = useState("")
    const [changeTime,setChangeTime] =useState("")
    const changeFormat=(element)=>{
        let index = element.indexOf(":")
        let extractedValue = element.substr(0,index)
        let convertedValue = parseInt(extractedValue)+12
        if(element.includes("AM") && convertedValue===24){
            setChangeTime(element.replace(extractedValue,"00"))
        }
        else if(element.includes("AM") && convertedValue<=24){
            setChangeTime( element)
       }
       else if(element.includes("PM") && convertedValue===24){
         setChangeTime( element)
       }
       else {
        setChangeTime(element.replace(extractedValue,convertedValue))
       }

    }
    return (
        <div>
            <input type="string" value={time} onChange={(event)=>{setTime(event.target.value)}}/>
            <button onClick={()=>changeFormat(time)}>change</button>
            <div>{changeTime}</div>
            {/* {
                inputs && inputs.map((element)=>(
                    <div> {changeFormat(element)}</div>
                   
                ))
            } */}
        </div>
    )
}