import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function QuestionPage() {

    const { id } = useParams();
    const history = useHistory();
    const location = useLocation();

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
                    category: resp.data[0].category,
                    createdate: resp.data[0].createdate,
                }
            )
        })
        console.log(location.pathname);

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

    useEffect(() => {
        bodyRef.current.focus();
    }, [bodyRef])

    const voteQuestion = (id) => {
        // Axios.put(`/question/vote/${id}`)
        // let prevList = questionList
        // let question = prevList.find(ques => ques.id === id)
        // if (question)
        //     question.votes++;
        // setQuestionList([...prevList])
    };

    return (
        <div className="page">
            <div className="container">
                <div className="row ml-2 mb-2">
                    <h1>{question.category} <span>&#62;</span> Question</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5>User{question.userid} asked on {question.createdate}</h5>
                                <h3>{question.title}</h3>
                                <p>{question.body}</p>
                            </div>
                            <div className="card-footer">
                                <div className="card-button left" data-toggle="collapse" data-target="#answer-form" aria-expanded="false" aria-controls="collapseExample">
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
                                <textarea className="form-control" id="answer" rows="3" maxlength="500"
                                    placeholder="Provide a detailed answer..."
                                    ref={bodyRef} onChange={(e) => {
                                        setBody(e.target.value);
                                    }}></textarea>
                                {/* <div>{validation.bodyStatus}</div> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="user">User</label>
                                <input type="number" className="form-control" id="user" placeholder="UserId"
                                    ref={userRef} onChange={(e) => {
                                        setUserid(e.target.value);
                                    }} />
                                {/* <div>{validation.userStatus}</div> */}
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
                                <li className="list-group-item mb-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
