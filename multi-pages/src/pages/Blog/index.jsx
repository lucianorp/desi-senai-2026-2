import { useEffect, useState } from "react"
import { FaEye } from "react-icons/fa";

export const Blog = ()=>{
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(getposts =>{
            setPosts(getposts)
        })
    },[])

    return(
        <>
            <div className="flex gap-3 flex-wrap">
                {posts.map(post=>(
                    <div className="card rounded p-2">
                        <img src={post.image} alt={post.title}/>
                        <h2 className="text-2xl">{post.title}</h2>
                        <p className="my-2">{post.description}</p>
                        <p className="flex items-center gap-2"><FaEye /> {post.views} views</p>
                    </div>
                ))
                
                }
            </div>
          
            
        </>
    )
}