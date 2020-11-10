import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'

export default function AskQuestion() {

    // state
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userid, setUserid] = useState('')
    const [validation, setValidation] = useState([])

    // refs
    const titleRef = useRef();
    const userRef = useRef();
    const bodyRef = useRef();

    const submitQuestion = () => {
        setValidation([])
        if (titleRef.current.value === '' || bodyRef.current.value === '' || userRef.current.value === '') {
            validateForm();
        }
        else {
            Axios.post('/question/ask', {
                title: title,
                body: body,
                userid: userid,
                // categoryid: categoryid

            })

            //Add to reducer
            // setMovieList([
            //     ...movieList,
            //     { name: movie, review: review }
            //   ]);


            titleRef.current.value = '';
            bodyRef.current.value = '';
            userRef.current.value = '';
            titleRef.current.focus();
            setTitle('');
            setBody('');
            setUserid('');
        }

    }

    useEffect(() => {
        titleRef.current.focus();
    }, [titleRef])

    const validateForm = () => {
        if (bodyRef.current.value === '') {
            let prevState = validation;
            prevState.push({bodyStatus: 'Please enter a question body.'})
            setValidation(prevState)
            bodyRef.current.focus();
        }
        if (userRef.current.value === '') {
            let prevState = validation;
            prevState.push({userStatus: 'Please enter a userId.'})
            setValidation(prevState)
            userRef.current.focus();
        }
        if (titleRef.current.value === '') {
            let prevState = validation;
            prevState.push({titleStatus: 'Please enter a question title.'})
            setValidation(prevState)
            titleRef.current.focus();
        }
    };

    return (
        <div className="page form">
            <div className="form-box">
                <label>Title</label>
                <input type="text" placeholder="Title" ref={titleRef} onChange={(e) => {
                    setTitle(e.target.value);
                }} />
                <div>{validation.titleStatus}</div>
                <label>UserId</label>
                <input type="number" placeholder="UserId" ref={userRef} onChange={(e) => {
                    setUserid(e.target.value);
                }} />
                <div>{validation.userStatus}</div>
                <label>Body</label>
                <textarea placeholder="Enter your question..." ref={bodyRef} onChange={(e) => {
                    setBody(e.target.value);
                }} />
                <div>{validation.bodyStatus}</div>
                <button onClick={submitQuestion}>Submit</button>
            </div>
        </div>
    )
}
