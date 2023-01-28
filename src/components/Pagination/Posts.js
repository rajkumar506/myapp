import React,{useState,useEffect} from "react";
import { Pagination } from "./PageNumberList";
export const Posts = ()=>{
    const [data,setData] = useState([])
    const [currentPagePosts,setCurrentPagePosts] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
useEffect(()=>{
    const fetchPosts = async ()=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts',{method:"get"})
        response = await response.json()
        setData([...response])
        let dataToSet=response?.slice(0,10);
        setCurrentPagePosts([...dataToSet])
        console.log("my response", response)
    }
    fetchPosts()
},[])

useEffect(()=>{
handleSetCurrentPagePosts()
},[currentPage])

const handleSetCurrentPagePosts = ()=>{
    let intialIndex = (currentPage-1)*10;
    let finalIndex= currentPage*10
    let dataToSet = data?.slice(intialIndex,finalIndex)
    setCurrentPagePosts([...dataToSet])
}
return (
    <> <div style={{display:"flex",flexDirection:"column", gap:"10px"}}> 
    {
        currentPagePosts?.map((post,index)=>(
            <div key={index} style={{background:"grey"}} >{post.title} {post.id}</div>
        ))
    }
</div>

<Pagination data={data} setCurrentPage={setCurrentPage}/>
</>
   
    
)
}
