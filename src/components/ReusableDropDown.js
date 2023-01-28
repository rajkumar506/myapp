import React from "react";
export const Dropdown = ({data,dropDownValue,setDropDownValue,name,id})=>{
    
    return (
        <div>
            
        <select value={dropDownValue} name={name} id={id} onChange={(event)=>setDropDownValue(event.target.value)}>
         {
            data?.map((element)=>(
                <option key={element.id} value={element.value}>{element.value}</option>
            ))
         }
        </select>
        </div>
    )
}