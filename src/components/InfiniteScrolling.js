import React,{useState,useEffect} from "react";
export const InfiniteScrolling = ()=>{
    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
   // console.log("my page number",page)
    useEffect(()=>{
        console.log("my apage number in useffect",page)
        try{
            fetch(`https://catfact.ninja/facts?page=${page}&limit=20`).then(response=>{
                if(!response.ok){
                    throw "error"
                }
                else{
                    return response.json()
                }
             }).then(response=>{
                setData([...data,...response.data])
                 //console.log("my response",response)
             })}
             catch(error){
               throw error
             }
        
    
    },[page])
    useEffect(()=>{
     window.addEventListener("scroll", (event)=>{
        const {scrollHeight,clientHeight,scrollTop} = document.documentElement;
        if(scrollTop+clientHeight>=scrollHeight-100){
            console.log("hello window event listeneter")
            throttling(handlePageNumber,3000)()
        }
       // console.log("my event",document.documentElement)
     })
     return ()=>{
        window.removeEventListener("scroll", (event)=>{
            const {scrollHeight,clientHeight,scrollTop} = document.documentElement;
            if(scrollTop+clientHeight>=scrollHeight){
                throttling(handlePageNumber,3000)()
            }
            console.log("my event",document.documentElement)
         })
     }
    })//console.log("my response",resp
    const handlePageNumber=()=>{
        setPage(page+1)
    }
    const throttling=(fxn,delay)=>{
        let flag=true;
        return function(){
            if(flag){
                fxn()
                flag=false
                setTimeout(()=>{
                    flag=true
                },delay)
            }
        }
    }
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
        {
            data?.map((element,index)=>(
                <div key={index} style={{background:"#b2b2bf"}}>{element.fact}rajkumar {index}</div>
            ))
        }
        </div>
    )
}