import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import $ from 'jquery'
import { useSelector } from 'react-redux'

export default function QuestionPage() {

    // route atrr
    const { id } = useParams();
    const history = useHistory();
    const location = useLocation();

    // states
    const [question, setQuestion] = useState({})
    const [answerList, setAnswerList] = useState([])
    const [body, setBody] = useState('')
    const [hideQuestion, setHideQuestion] = useState(false);
    const [hideAnswers, setHideAnswers] = useState(false);
    const userState = useSelector(state => state);

    // refs
    const bodyRef = useRef();

    // get question from server
    useEffect(() => {
        Axios.get(`/question/get/${id}`).then((resp) => {
            if (resp.data.length === 0) {
                setHideQuestion(true);
            } else {
                setQuestion(
                    {
                        id: resp.data[0].id,
                        title: resp.data[0].title,
                        body: resp.data[0].body,
                        votes: resp.data[0].votes,
                        userid: resp.data[0].userid,
                        username: resp.data[0].username,
                        categoryid: resp.data[0].categoryid,
                        category: resp.data[0].category,
                        createdate: resp.data[0].createdate,
                        formatdate: resp.data[0].formatdate,
                    }
                )
            }
        });
        console.log(location.pathname); //check path being passed in

        Axios.get(`/answer/get/${id}`).then((resp) => {
            if (resp.data.length === 0) {
                setHideAnswers(true);
            } else {
                setAnswerList(resp.data)
            }
        });
    }, []);

    // hooks
    useEffect(() => {
        bodyRef.current.focus();
    }, [bodyRef])

    // add new answer
    const submitAnswer = () => {
        if (body !== '') {
            let newAnswer = {
                body: body,
                userid: userState.userId,
                questionid: id
            }
            setAnswerList([...answerList, newAnswer])
            Axios.post('/answer/add',
                {
                    body: body,
                    userid: userState.userId,
                    questionid: id
                }
            );
            //Add to reducer
            // setAnswerList([
            //     ...answerList,
            //      answer
            //   ]);
            bodyRef.current.value = '';
            bodyRef.current.focus();
            $('#answerBtn').click();
        };
    };

    // handle enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            submitAnswer();
        }
    }


    const voteQuestion = (id) => {
        Axios.put(`/question/vote/${id}`)
        let prevQuestion = question
        prevQuestion.votes++;
        setQuestion(prevQuestion)
    };

    return (
        <div className="page">
            <div className="container">
                <div className="row ml-2 mb-2">
                    {hideQuestion ?
                        <h3>There is no question asked</h3> :
                        <h1>{question.category} <span>&#62;</span> Question</h1>
                    }
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5>{question.username} <span className="mb-1 text-muted">asked </span> </h5>
                                    <small><span>{question.formatdate}</span></small>
                                </div>
                                <h3>{question.title}</h3>
                                <p>{question.body}</p>
                            </div>
                            <div className="card-footer">
                                <div className="card-button left" id="answerBtn" data-toggle="collapse" data-target="#answer-form" aria-expanded="false" aria-controls="collapseExample">
                                    <span> <QuestionAnswerIcon /> Answer</span>
                                </div>
                                <div className="card-button right" onClick={() => { voteQuestion(question.id) }}>
                                    <span ><ThumbUpIcon /> {question.votes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <form id="answer-form" className="collapse">
                            <div className="form-group">
                                <label htmlFor="answer">Answer</label>
                                <textarea className="form-control" id="answer" rows="3" maxLength="500"
                                    placeholder="Provide a detailed answer..."
                                    onKeyDown={handleKeyDown}
                                    ref={bodyRef} onChange={(e) => {
                                        setBody(e.target.value);
                                    }} required></textarea>
                                {/* <div>{validation.bodyStatus}</div> */}
                            </div>
                            <div className="form-group">
                                <button type="button" className="main-button btn btn-primary btn-lg btn-block" onClick={submitAnswer}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div id="answer-list">
                            <ul className="list-group list-group-flush">
                                {hideAnswers ?
                                    <li className="list-group-item mb-3">
                                        <h3>There are no answers for this question</h3>
                                    </li> :
                                    answerList.map((val, key) => {
                                        return (
                                            <li className="list-group-item mb-3">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">{val.username} <span className="mb-1 text-muted">answered</span></h5>
                                                    <small>{val.formatdate}</small>
                                                </div>
                                                <p className="mb-1">{val.body}</p>
                                                <div className="d-flex w-100 justify-content-end">
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}