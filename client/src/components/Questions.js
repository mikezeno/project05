import React, { useState, useEffect } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function Questions() {

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
            <div className="container page">
                <div className="row">
                    <div className="col">
                        {questionList.map((val, key) => {
                            return (
                                <div className="row">
                                    <div className="col">
                                        <div className="card" key={val.id} >
                                            <div className="card-body" onClick={() => { history.push(`/question/${val.id}`) }}>
                                                <h3>{val.title}</h3>
                                                <p>{val.body.length > 50 ? val.body.substring(0, 50) + '...' : val.body}</p>
                                                <h5>Posted By: User{val.userid}</h5>
                                            </div>
                                            <div className="card-footer">
                                                <div className="card-button left">
                                                    Answer
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
