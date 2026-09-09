import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useNavigate } from "react-router";

const PostDetail = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    let navigate = useNavigate();

    useEffect(() => {
        // fetch('http://localhost:3000/posts' + id)
        fetch(`http://localhost:3000/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    if (!post) return <div>Carregando ...</div>



    return (
        <div className="p-4">
            <button className="cursor-pointer text-xl text-amber-600 mb-5 hover:text-amber-300" onClick={() => navigate(-1)}>
               Voltar
            </button>
            <h1 className="text-xl font-bold">{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>{post.description}</p>
            <p>{post.views}</p>


        </div>
    )
}

export default PostDetail