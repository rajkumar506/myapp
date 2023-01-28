import React, { useState, useCallback, useEffect } from "react";

export const Suggestion = () => {
  const [apiData,setApiData] = useState([])
  const [inputValue,setInputValue] = useState("");
  const data=["banana","Golad","Goldy","banayal","carrot","berry"]
  const handleInputValue = (event)=>{
  setInputValue(event.target.value)
  //makeSuggetionList(event.target.value)
  }
  const makeSuggetionList = (input)=>{
    console.log("my input value",input)
    // if(input.length>0){
      let returnedData = data.map((element)=>{
        if(element.includes(input)){
          return element
         }
      })
     setApiData(returnedData) 
    // }
    // else{
    //   setApiData([])
    // }
    
  }
 const debounce = (fxn,delay)=>{
  let interval
  return function(...args){
  if(interval) clearTimeout(interval)
   interval=setTimeout(()=>{
   // console.log("my fxn ",this)
    fxn.apply(this,args)
   },delay)
  }
 }

// const throttling = (fxn,delay)=>{
//   let flag = true
//   return function(...args){
//     if(flag){
//       fxn.apply(this,args)
//       flag=false
      
//       setTimeout(() => {
//         flag=true
//       },delay);
//     }
//     }
    
// }

 let returnedDebounce = useCallback(debounce(makeSuggetionList,3000),[])

  return (
    <div>
      <input type="string" value={inputValue} onChange={(event)=>handleInputValue (event)}onKeyUp={()=>returnedDebounce(inputValue)}/>
      
      {
      apiData?.map((element,index)=>(
        <div key={index}>{element}</div>
      ))
      }
    </div>
  )
}