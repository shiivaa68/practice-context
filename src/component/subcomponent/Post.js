import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ThemeContext from '../ThemeContext'

function Post (){
   const podtycolor = useContext(ThemeContext)
const [post,setPost] = useState({})
const{id} =useParams()

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(result => setPost(result))
},[id])





    return(
        <article style={{flex: 3, border: 'solid 1px',
         padding: '1em', margin: '1em',...podtycolor}}>
            <h1>{post.title}</h1>
            <p> {post.body}</p>
        </article>
    )
}

export default Post;