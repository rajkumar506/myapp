import React,{useState} from "react";
export const Virtuallist = ()=>{
    const [data,setData] = useState(Array(1000).fill().map((element,index)=>{
    return {
        id:index,
        image:'http://via.placeholder.com/40',
        name:"Rajkumar",
        text:"rajkumar"+" "+index
    }
    }))
    return (
        <div style={{display:"flex",flexDirection:"column", gap:"10px"}}>
         {
            data?.map((element,index)=>(
                <div Key={index} style={{display:"flex",background:"#b2b2bf"}}>
                    <div>{element.name}</div>
                    <div>{element.image}</div>
                    <div>{element.text}</div>
                </div>
            ))
         }
        </div>
    )
}
