import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function QuestionEdit() {

    let { id } = useParams()

    const [question, setQuestion] = useState({})
    const [newBody, setQuestionBody] = useState('')
    const history = useHistory();
    const editQuestionRef = useRef();

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

    const deleteQuestion = (id) => {
        // Prompt "Are you sure you want to delete this question"
        Axios.delete(`/question/delete/${id}`);

        // Add to reducer: 
        //let question = movieList.filter(movie => movie.id !== id);
        //setMovieList(movies)

        // Redirect to Questions component
    };

    const editQuestion = (id) => {
        Axios.put('/question/edit', {
            id: id,
            body: newBody
        });

        // Add to reducer
        // const newState = questionList.map(question => question.id === id
        //     ? { ...question, body: newBody } : question
        // );
        //setMovieList(newState);

        setQuestion(
            {
                title: question.title,
                body: newBody,
                votes: question.votes,
                userid: question.userid,
                categoryid: question.categoryid,
                createdate: question.createdate,
            }
        )
        editQuestionRef.current.value = ''
        setQuestionBody('');
    };

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5>User{question.userid} asked on {question.createdate}</h5>
                                <h3>{question.title}</h3>
                                <p>{question.body}</p>
                            </div>
                            <div className="card-footer">
                                <div className="card-button left" onClick={() => { editQuestion(id) }}>
                                    <span> <EditIcon/> Edit</span>
                                </div>
                                <div className="card-button right" onClick={() => { deleteQuestion(id) }}>
                                    <span> <DeleteIcon/> Delete</span>
                                </div>
                            </div>
                        </div>
                        {/* <button type="button" onClick={() => { deleteQuestion(id) }}>Delete</button>
                        <input type="text" id="updateInput" ref={editQuestionRef} onChange={(e) => { setQuestionBody(e.target.value) }} />
                        <button type="button" onClick={() => { editQuestion(id) }}>Submit</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
