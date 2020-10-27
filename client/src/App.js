import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  // create a state store text from inputs
  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')
  const [movieList, setMovieList] = useState([])

  useEffect( ()=> {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieList(response.data)
    })
  }, [])

  const handleMovieName = (e) => {
    setMovieName(e.target.value)
  }

  const handleReview = (e) => {
    setReview(e.target.value)
  }

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName, 
      movieReview: review
    }).then( ()=> {
      alert('successful insert')
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD Movie Reviews</h1>
        <div className="form">
          <labl>Movie Name</labl>
          <input type="text" name="movieName" onChange={(e) => {setMovieName(e.target.value)}} />
          <labl>Review</labl>
          <input type="text" name="review" onChange={(e) => {setReview(e.target.value)}} />
          <button onClick={submitReview}>Submit</button>
        </div>
        {movieList.map( (val) => {
          return <h1>Movie Name: {val.name} | Movie Review: {val.review}</h1>
        })}
      </header>
    </div>
  );
}

export default App;
