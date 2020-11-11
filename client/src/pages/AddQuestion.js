import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css'
import Axios from 'axios'

export default function AddQuestion() {

    // state
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userid, setUserid] = useState('')
    const [validation, setValidation] = useState([])

    // refs
    const titleRef = useRef();
    const userRef = useRef();
    const bodyRef = useRef();

    const submitQuestion = () => {
        setValidation([])
        if (titleRef.current.value === '' || bodyRef.current.value === '' || userRef.current.value === '') {
            validateForm();
        }
        else {
            Axios.post('/question/ask', {
                title: title,
                body: body,
                userid: userid,
                // categoryid: categoryid

            })

            //Add to reducer
            // setMovieList([
            //     ...movieList,
            //     { name: movie, review: review }
            //   ]);


            titleRef.current.value = '';
            bodyRef.current.value = '';
            userRef.current.value = '';
            titleRef.current.focus();
            setTitle('');
            setBody('');
            setUserid('');
        }

    }

    useEffect(() => {
        titleRef.current.focus();
    }, [titleRef])

    const validateForm = () => {
        if (bodyRef.current.value === '') {
            let prevState = validation;
            prevState.push({ bodyStatus: 'Please enter a question body.' })
            setValidation(prevState)
            bodyRef.current.focus();
        }
        if (userRef.current.value === '') {
            let prevState = validation;
            prevState.push({ userStatus: 'Please enter a userId.' })
            setValidation(prevState)
            userRef.current.focus();
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
                    <div className="col-8">
                        <form>
                            <div className="form-group">
                                <label for="questiontitle">Title</label>
                                <input type="text" className="form-control" id="questiontitle" placeholder="Summarize your question..."
                                    ref={titleRef} onChange={(e) => {
                                        setTitle(e.target.value);
                                    }} />
                                <div>{validation.titleStatus}</div>
                            </div>
                            <div className="form-group">
                                <label for="question">Question</label>
                                <textarea className="form-control" id="quesiton" rows="3" placeholder="Describe your question in detail..."
                                    ref={bodyRef} onChange={(e) => {
                                        setBody(e.target.value);
                                    }}></textarea>
                                <div>{validation.bodyStatus}</div>
                            </div>
                            <div className="form-group">
                                <label for="Category">Category</label>
                                <select className="form-control" id="Category">
                                    <option>Arts & Entertainment</option>
                                    <option>Computers & Electronics</option>
                                    <option>Finance & Business</option>
                                    <option>Food & Cooking</option>
                                    <option>Health & Relationships</option>
                                    <option>Hobbies & Crafts</option>
                                    <option>Home & Garden</option>
                                    <option>Pets & Animals</option>
                                    <option>Travel & Work</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label for="user">User</label>
                                <input type="number" className="form-control" id="user" placeholder="UserId"
                                    ref={userRef} onChange={(e) => {
                                        setUserid(e.target.value);
                                    }} />
                                <div>{validation.userStatus}</div>
                            </div>
                            <div className="form-group">
                                <button type="button" class="main-button btn btn-primary btn-lg btn-block" onClick={submitQuestion}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
