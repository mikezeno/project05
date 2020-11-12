import React, { useState, useEffect } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function QuestionList() {

    const [questionList, setQuestionList] = useState([])
    const [category, setCategory] = useState('')
    const history = useHistory();
    const { catid } = useParams();
    const [hideList, setHideList] = useState(false);

    useEffect(() => {
        Axios.get(`/question/get/cat/${catid}`).then((resp) => {
            if (resp.data.length === 0) {
                setHideList(true)
            } else {
                setCategory(resp.data[0].category);
                setQuestionList(resp.data);
            }
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
                <div className="row ml-2 mb-2">
                    <h1>{category}</h1>
                </div>
                <div className="row justify-content-center mt-5">
                    {hideList &&
                        <h3>There are no questions asked in this category</h3>
                    }
                </div>
                <div className="row">
                    <div className="col">
                        {questionList.map((val, key) => {
                            return (
                                <div className="row">
                                    <div className="col">
                                        <div className="card" key={val.id} >
                                            <div className="question-body card-body" onClick={() => { history.push(`/app/question/${val.id}`) }}>
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5>{val.username} <span className="mb-1 text-muted">asked </span> </h5>
                                                    <small><span>{val.formatdate}</span></small>
                                                </div>
                                                <h3>{val.title}</h3>
                                                <p>{val.body.length > 200 ? val.body.substring(0, 200) + '...' : val.body}</p>
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
