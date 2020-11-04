import React, { useState, useEffect } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Post() {

    let { id } = useParams()

    const [post, setPost] = useState({})

    useEffect(() => {
        console.log('inside react the Id is =', id)
        Axios.get(`/blog/get/${id}`).then((resp) => {
            console.log(resp.data)
            setPost(
                {
                    title: resp.data[0].title,
                    user_name: resp.data[0].user_name,
                    post_text: resp.data[0].post_text
                }
            )
        })
    }, [post]);

    return (
        <div className="page BlogPage">
            <div className="post-container">
                <div className="post">
                    <h2>{post.title}</h2>
                    <h5>{post.user_name}</h5>
                    <p>{post.post_text}</p>
                </div>
            </div>
        </div>
    )
}
