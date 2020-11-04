import React, { useState, useEffect } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Blog() {

    const [postList, setPostList] = useState([]);
    let history = useHistory();

    useEffect(() => {
        Axios.get('/blog/get').then((response) => {
            console.log(response.data);

            setPostList(response.data);
        });
    }, [postList]);

    const likePost = (id) => {
        Axios.put(`/blog/like/${id}`)
    };

    return (
        <div className="page BlogPage">
            <div className="post-container">
                {postList.map((val, key) => {
                    return (
                        <div className="post" key={val.id} >
                            <div className="inner-post" onClick={() => {history.push(`/post/${val.id}`)}}>
                                <h2>{val.title}</h2>
                                <p>{val.post_text.length > 500 ? val.post_text.substring(0,500) + '...' : val.post_text}</p>
                                <h5>{val.user_name}</h5>
                            </div>
                            <p>Likes: {val.likes}</p>
                            <button onClick={() => {likePost(val.id)}}>Like</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
