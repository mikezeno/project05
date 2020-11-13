import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import $ from 'jquery'

export default function QuestionEdit() {

    let { id } = useParams()
    const history = useHistory();

    const [question, setQuestion] = useState({})
    const [newBody, setQuestionBody] = useState('')
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
            bodyRef.current.value = resp.data[0].body;
        })
        
    }, []);

    // hooks
    useEffect(() => {
        bodyRef.current.focus();
    }, [bodyRef])

    const deleteQuestion = (id) => {
        // Prompt "Are you sure you want to delete this question"
        Axios.delete(`/question/delete/${id}`);
        history.push(`/app/category/${question.categoryid}`)

        // Redirect to Questions component
    };

    const submitEdit = (id) => {
        Axios.post('/question/edit', 
        {
            id: id,
            body: newBody
        });
        setQuestion(
            {
                title: question.title,
                body: newBody,
            }
        )
        $('#editBtn').click();
    };

    // handle enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            submitEdit();
        }
    }


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
                                <div className="card-button left" id="editBtn" data-toggle="collapse" data-target="#edit-form" aria-expanded="false">
                                    <span> <EditIcon /> Edit</span>
                                </div>
                                <div className="card-button right" onClick={() => { deleteQuestion(id) }}>
                                    <span> <DeleteIcon /> Delete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <form id="edit-form" className="collapse">
                            <div className="form-group">
                                <label htmlFor="edit-body">Edit Question</label>
                                <textarea className="form-control" id="edit-body" rows="3" maxLength="2000"
                                    onKeyDown={handleKeyDown}
                                    ref={bodyRef} onChange={(e) => {
                                        setQuestionBody(e.target.value);
                                    }} required></textarea>
                                {/* <div>{validation.bodyStatus}</div> */}
                            </div>
                            <div className="form-group">
                                <button type="button" className="main-button btn btn-primary btn-lg btn-block" onClick={submitEdit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
