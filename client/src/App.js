import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'

function App() {

  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')
  const [movieReviewList, setMovieList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setMovieList(response.data);
    })
  })

  const submitreview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName, 
      movieReview: review
    }).then(() => {
      alert("Successful insert");
    });
  };

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name:</label>
        <input 
          type="text" 
          name="movieName" 
          onChange={(e) => {setMovieName(e.target.value);}} 
        />
        <label>Review:</label>
        <input  type="text" 
                name="review"
                onChange = {(e) => {setReview(e.target.value);}} />

        <button onClick={submitreview}>Submit</button>

        {movieReviewList.map((val) => {
          return <h1>MovieName: {val.name} | MovieReview: {val.review}</h1>
        })}

      </div>
    </div>
  );
}

export default App;
