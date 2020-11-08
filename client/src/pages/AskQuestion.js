import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'

export default function AskQuestion() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userid, setUserid] = useState('')



    const titleRef = useRef();
    const userRef = useRef();
    const bodyRef = useRef();

    const submitPost = () => {
        Axios.post('/question/ask', {
            title: title,
            body: body,
            userid: userid,
          // categoryid: categoryid
            
        })
        titleRef.current.value = ''
        bodyRef.current.value = ''
        userRef.current.value = ''
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
                <label>UserId</label>
                <input type="number" placeholder="UserId" ref={userRef} onChange={(e)=> {
                    setUserid(e.target.value);
                }} />
                <label>Body</label>
                <textarea placeholder="Enter your question..." ref={bodyRef} onChange={ (e) => {
                    setBody(e.target.value);
                }}/>
                <button onClick={submitPost}>Submit</button>
            </div>
        </div>
    )
}
