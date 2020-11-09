import React, { useState, useEffect } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function Questions() {

    const [questionList, setQuestionList] = useState([])
    const history = useHistory();

    useEffect(() => {
        Axios.get('/question/get').then((resp) => {
            console.log('inside questions use effect',resp.data);

            setQuestionList(resp.data);
        });
    }, []);

    const voteQuestion = (id) => {
        Axios.put(`/question/vote/${id}`)
        let prevList = questionList
        let question = prevList.find( ques => ques.id === id)
        if (question)
            question.votes++;
        setQuestionList( [...prevList])
    };

    return (
        <div className="page">
            <div>
                <button onClick={(e) => history.push('/question/ask')}>Ask Question</button>
            </div>
            <div className="content">
                {questionList.map((val, key) => {
                    return (
                        <div className="card" key={val.id} >
                            <div className="inner-post" onClick={() => {history.push(`/question/${val.id}`)}}>
                                <h2>{val.title}</h2>
                                <p>{val.body.length > 500 ? val.body.substring(0,500) + '...' : val.body}</p>
                                <h5>{val.userid}</h5>
                            </div>
                            <p>Likes: {val.likes}</p>
                            <button onClick={() => {voteQuestion(val.id)}}>Like</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
