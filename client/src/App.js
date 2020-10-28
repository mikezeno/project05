import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  // create a state store text from inputs
  const [movie, setMovie] = useState('')
  const [review, setReview] = useState('')
  const [movieList, setMovieList] = useState([])
  const [newReview, setNewReview] = useState('')

  const movieRef = useRef();
  const reviewRef = useRef();
  const editRef = useRef();

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieList(response.data)
    })
  }, [])

  const submitReview = () => {

    Axios.post('http://localhost:3001/api/insert', {
      movieName: movie,
      movieReview: review
    });

    setMovieList([
      ...movieList,
      { name: movie, review: review }
    ]);

    movieRef.current.value = ''
    reviewRef.current.value = ''
  };

  const deleteReview = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`);
    let movies = movieList.filter( movie => movie.id !== id);
    setMovieList(movies)
  };

  const updateReview = (id) => {
    Axios.put('http://localhost:3001/api/update', {
      id : id,
      movieReview : newReview
    });

    // Old way
    // let prevState = movieList;
    // let index = prevState.findIndex( movie => movie.id === id)
    // prevState[index].review = newReview;
    // setMovieList(prevState);

    // Alternate with spread operator
    const newState = movieList.map(movie => movie.id === id
        ? { ...movie, review: newReview } : movie
    );
    setMovieList(newState);
    
    editRef.current.value = ''
    setNewReview('');
  };

  return (
    <div className="App">
      <h1>CRUD Movie Reviews</h1>
      <div className="form">
        <labl>Movie Name</labl>
        <input type="text" name="movieName" ref={movieRef} onChange={(e) => { setMovie(e.target.value) }} />
        <labl>Review</labl>
        <input type="text" name="review" ref={reviewRef} onChange={(e) => { setReview(e.target.value) }} />
        <button onClick={submitReview}>Submit</button>

        {movieList.map((val) => {
          return (
            <div className="card">
              <h2>{val.name}</h2>
              <p>{val.review}</p>
              <button type="button" onClick={() => { deleteReview(val.id) }}>Delete</button>
              <input type="text" id="updateInput" ref={editRef} onChange={ (e) => { setNewReview(e.target.value)}} />
              <button type="button" onClick={() => { updateReview(val.id) }}>Edit Review</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
