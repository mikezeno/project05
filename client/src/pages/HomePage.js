import React, { useState, useEffect } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function HomePage() {

    const [questionList, setQuestionList] = useState([])
    const history = useHistory();
    const [voteState, setVoteState] = useState([])

    useEffect(() => {
        Axios.get('/question/get/').then((resp) => {
            setQuestionList(resp.data);
        });
    }, []);

    useEffect(() => {
        Axios.get('/question/get/').then((resp) => {
            setQuestionList(resp.data);
        });
    }, [voteState])

    const voteQuestion = (id) => {
        Axios.put(`/question/vote/${id}`)
        let prevList = questionList
        let question = prevList.find(ques => ques.id === id)
        if (question)
            question.votes++;
        setVoteState([...prevList])
        setQuestionList([...prevList])
    };

    return (
        <div className="page">
            <div className="container ">
                <div className="row ml-2 mb-2">
                    <h1>Home <span>&#62;</span> Trending</h1>
                </div>
                <div className="row">
                    <div className="col">
                        {questionList.map((val, key) => {
                            return (
                                <div className="row" key={key}>
                                    <div className="col">
                                        <div className="card">
                                            <div className="question-body card-body" onClick={() => { history.push(`/app/question/${val.id}`) }}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5>{val.username} <span className="mb-1 text-muted">asked </span> </h5>
                                                    <small><span>{val.formatdate}</span></small>
                                                </div>
                                                <h3>{val.title}</h3>
                                                <p>{val.body.length > 200 ? val.body.substring(0, 200) + '...' : val.body}</p>
                                                <div className="d-flex w-100 justify-content-end">
                                                    <small><span className="badge ">{val.category}</span></small>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="card-button left" onClick={() => { history.push(`/app/question/${val.id}/answer`) }}>
                                                    <span> <QuestionAnswerIcon /> Answer</span>
                                                </div>
                                                <div className="card-button right" onClick={() => { voteQuestion(val.id) }}>
                                                    <span ><ThumbUpIcon /> {val.votes}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
