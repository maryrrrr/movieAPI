import React, { useState } from "react";
import './App.css';


function App() {
  const [movieTitle , movieTitleChanger] = useState('');
  const [searchMovieBoxOffice , setSearchMovieBoxOffice] = useState();
  const [searchMovieDirector , setSearchMovieDirector] = useState();
  const [searchMovieCountry , setSearchMovieCountry] = useState();
  const [searchPoster , setsearchPoster] = useState();


  const getMovie = (searchMovieTitle) => {
      // console.log("searchMovieTitle", searchMovieTitle);

        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=874a33a8&&t=" + movieTitle)
        .then((response) => {
            return response.json();})
        .then ((response) => {
            // console.log(response);
            setSearchMovieBoxOffice(response.BoxOffice);
            setSearchMovieDirector(response.Director);
            setSearchMovieCountry(response.Country);
            setsearchPoster(response.Poster);
        });
        };

  return (
       <div className="App" >
         <input onChange= {(e) => 
         {
         movieTitleChanger(e.target.value);}}
         type="text" placeholder="Name of Movie..."/>

        <button className="bg-yellow" onClick= {() => 
        {
           getMovie(movieTitle);
        }}> Submit </button>
      <div className="grid h-screen place-items-center">
       <div className="text-black font-bold bg-white w-1/2 grid h-screen place-items-center m-1">
        
         BoxOffice: {searchMovieBoxOffice}
         <br/>
         Director: {searchMovieDirector}
         <br/>
         Country: {searchMovieCountry}
         <br/>
         Poster: {<img className="pic" src= {searchPoster}/> }
       </div>
       </div>
    </div>
  );
}

export default App;
