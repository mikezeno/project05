import React, { useState, useEffect } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Question() {

    let { id } = useParams()

    const [question, setQuestion] = useState({})

    useEffect(() => {
        console.log('inside react the Id is =', id)
        Axios.get(`/questions/get/${id}`).then((resp) => {
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

    return (
        <div className="page">
            <div className="content">
                    <h2>{question.title}</h2>
                    <h5>{question.body}</h5>
                <div className="post">
                <div className="card">
                    <p>{question.userid}</p>
                    <p>{question.votes}</p>
                    <p>{question.userid}</p>
                    <p>{question.createdate}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
