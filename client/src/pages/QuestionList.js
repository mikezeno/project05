import React, { useState, useEffect } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function QuestionList() {

    const [questionList, setQuestionList] = useState([])
    const history = useHistory();

    useEffect(() => {
        Axios.get('/question/get').then((resp) => {
            console.log('inside questions use effect', resp.data);
            setQuestionList(resp.data);
        });
    }, []);

    const voteQuestion = (id) => {
        Axios.put(`/question/vote/${id}`)
        let prevList = questionList
        let question = prevList.find(ques => ques.id === id)
        if (question)
            question.votes++;
        setQuestionList([...prevList])
    };

    return (
        <div className="page">
            <div className="container ">
                <div className="row">
                    <div className="col">
                        {questionList.map((val, key) => {
                            return (
                                <div className="row">
                                    <div className="col">
                                        <div className="card" key={val.id} >
                                            <div className="card-body" onClick={() => { history.push(`/app/question/${val.id}`) }}>
                                                <h5>{val.username} asked on {val.formatdate}</h5>
                                                <h3>{val.title}</h3>
                                                <p>{val.body.length > 200 ? val.body.substring(0, 200) + '...' : val.body}</p>
                                            </div>
                                            <div className="card-footer">
                                                <div className="card-button left">
                                                    <span> <QuestionAnswerIcon/> Answer</span>
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
                {/* <div>
                <button onClick={(e) => history.push('/question/ask')}>Ask Question</button>
            </div> */}
            </div>
        </div>

    )
}
