import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'

export default function CreatePost() {

    const [title, setTitle] = useState('')
    const [userName, setUserName] = useState('')
    const [postText, setPostText] = useState('')


    const titleRef = useRef();
    const userRef = useRef();
    const postRef = useRef();

    const submitPost = () => {
        Axios.post('/blog/create', {
            title: title,
            userName: userName,
            postText: postText
        })
        titleRef.current.value = ''
        userRef.current.value = ''
        postRef.current.value = ''
        titleRef.current.focus();
    }

    useEffect( () => {
        titleRef.current.focus();
    }, [titleRef])

    return (
        <div className="page createPost">
            <div className="uploadPost">
                <label>Title</label>
                <input type="text" placeholder="Title" ref={titleRef} onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <label>Username</label>
                <input type="text" placeholder="Username" ref={userRef} onChange={(e)=> {
                    setUserName(e.target.value);
                }} />
                <label>Post Text</label>
                <textarea placeholder="Post text..." ref={postRef} onChange={ (e) => {
                    setPostText(e.target.value);
                }}/>
                <button onClick={submitPost}>Submit</button>
            </div>
        </div>
    )
}
