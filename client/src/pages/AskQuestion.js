import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'
import { useSelector } from 'react-redux'

export default function AskQuestion() {

    // states
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [category, setCategory] = useState(1);
    const [validation, setValidation] = useState([])
    const userState = useSelector(state => state);

    // refs
    const titleRef = useRef();
    const bodyRef = useRef();

    // hooks
    useEffect(() => {
        titleRef.current.focus();
    }, [titleRef])

    useEffect(() => {
        console.log("category state= " + category)
    }, [category])

    // post question to server
    const submitQuestion = () => {
        setValidation([])
        if (titleRef.current.value === '' || bodyRef.current.value === '') {
            validateForm();
        }
        else {
            console.log(userState)

            Axios.post('/question/add', {
                title: title,
                body: body,
                userid: userState.userId,
                categoryid: category
            })
            //Add to reducer
            // setMovieList([
            //     ...movieList,
            //     { name: movie, review: review }
            //   ]);
            titleRef.current.value = '';
            bodyRef.current.value = '';
            titleRef.current.focus();
            setTitle('');
            setBody('');
        }
    }

    // validate form fields
    const validateForm = () => {
        if (bodyRef.current.value === '') {
            let prevState = validation;
            prevState.push({ bodyStatus: 'Please enter a question body.' })
            setValidation(prevState)
            bodyRef.current.focus();
        }
        if (titleRef.current.value === '') {
            let prevState = validation;
            prevState.push({ titleStatus: 'Please enter a question title.' })
            setValidation(prevState)
            titleRef.current.focus();
        }
    };

    return (
        <div className="page">
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Ask a question</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <form>
                            <div className="form-group">
                                <label htmlFor="questiontitle">Title</label>
                                <input type="text" className="form-control" id="questiontitle" maxLength="300"
                                    placeholder="Summarize your question..." required
                                    ref={titleRef} onChange={(e) => {
                                        setTitle(e.target.value);
                                    }} />
                                <div>{validation.titleStatus}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="question">Question</label>
                                <textarea className="form-control" id="quesiton" rows="3" 
                                placeholder="Describe your question in detail..." required
                                    ref={bodyRef} onChange={(e) => {
                                        setBody(e.target.value);
                                    }}></textarea>
                                <div>{validation.bodyStatus}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Category">Category</label>
                                <select className="form-control" id="Category" value={category} onChange={ (e) => {
                                    setCategory(e.target.value);
                                }}>
                                    <option value="1">Arts & Entertainment</option>
                                    <option value="2">Computers & Electronics</option>
                                    <option value="3">Finance & Business</option>
                                    <option value="4">Food & Cooking</option>
                                    <option value="5">Health & Relationships</option>
                                    <option value="6">Hobbies & Crafts</option>
                                    <option value="7">Home & Garden</option>
                                    <option value="8">Pets & Animals</option>
                                    <option value="9">Travel & Work</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="button" className="main-button btn btn-primary btn-lg btn-block" onClick={submitQuestion}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
