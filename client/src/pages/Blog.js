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
    }, []);

    const likePost = (id) => {
        Axios.put(`/blog/like/${id}`)
        console.log('likePost:id='+id)
        let tempList = postList
        tempList.forEach( row => {
            console.log('likePost:row.id='+row.id)
        })
        let post = tempList.find( row => row.id == id)
        console.log('post='+post)
        if (post)
            post.likes++;
        setPostList( [...tempList])
    };

    return (
        <div className="page">
            <div>
                <button onClick={(e) => history.push('/createpost')}>New Question</button>
            </div>
            <div className="content">
                {postList.map((val, key) => {
                    return (
                        <div className="card" key={val.id} >
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
