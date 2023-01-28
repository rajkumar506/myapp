import React from "react";

export const Pagination=({data,setCurrentPage})=>{
    let numberOfPages = Math.ceil(data.length/10)
    let arr = new Array(numberOfPages).fill(0)
    return(
        <div style={{display:"flex",border:"2px solid black",gap:"10px"}}>
           
           {
            arr?.map((element,index)=>(
                <span key={index} style={{display:"block",border:"1px solid black",width:"40px"}} onClick={()=>setCurrentPage(index+1)}>
                    {index+1}
                    
                </span>
            ))
           }
            
        </div>
    )
}