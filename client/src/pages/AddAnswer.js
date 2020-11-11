import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

export default function AddAnswer() {

    const { id } = useParams()

    const [question, setQuestion] = useState({})
    const [answer, setAnswer] = useState({})
    const [answerUserid, setUserid] = useState('')
    const [body, setBody] = useState('')

    const quesitonRef = useRef();
    const userRef = useRef();
    const bodyRef = useRef();

    useEffect(() => {
        Axios.get(`/question/get/${id}`).then((resp) => {
            console.log(resp.data)
            setQuestion(
                {
                    title: resp.data[0].title,
                    body: resp.data[0].body,
                    votes: resp.data[0].votes,
                    userid: resp.data[0].userid,
                    categoryid: resp.data[0].categoryid,
                    createdate: resp.data[0].createdate,
                }
            )
        })
    }, []);


    const submitAnswer = () => {

        if (body !== '') {
            setAnswer({
                body: body,
                userid: answerUserid,
                questionid: id
            });

            Axios.post('/answer/add',
            {
                body: body,
                userid: answerUserid,
                questionid: id
            }
            );
    
            //Add to reducer
            // setMovieList([
            //     ...movieList,
            //     { name: movie, review: review }
            //   ]);
    
            userRef.current.value = '';
            bodyRef.current.value = '';
            bodyRef.current.focus();
    
            //Redirect to question view
        };
    };

    useEffect( () => {
        bodyRef.current.focus();
    }, [bodyRef])

    return (
        <div className="page createPost">
            <div className="uploadPost">
                <label>{question.title}</label>
                <p>{question.body}</p>
                <label>UserId</label>
                <input type="number" placeholder="UserId" ref={userRef} onChange={(e)=> {
                    setUserid(e.target.value);
                }} />
                <label>Body</label>
                <textarea placeholder="Write your answer..." ref={bodyRef} onChange={ (e) => {
                    setBody(e.target.value);
                }}/>
                <button onClick={submitAnswer}>Submit Answer</button>
            </div>
        </div>
    )
}
