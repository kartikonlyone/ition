import React, { useState } from 'react';
import moviesData from '../movies';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const MovieList = () => {
  const [languageFilter, setLanguageFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');

  const languages = Array.from(new Set(moviesData.flatMap(movie => movie.movielanguages)));
  const countries = Array.from(new Set(moviesData.flatMap(movie => movie.moviecountries)));
  const genres = Array.from(new Set(moviesData.flatMap(movie => movie.moviegenres)));

  const filteredMovies = moviesData.filter(movie => {
    const matchLanguage = !languageFilter || movie.movielanguages.includes(languageFilter);
    const matchCountry = !countryFilter || movie.moviecountries.includes(countryFilter);
    const matchGenre = !genreFilter || movie.moviegenres.includes(genreFilter);
    return matchLanguage && matchCountry && matchGenre;
  });

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <select className="form-select" value={languageFilter} onChange={e => setLanguageFilter(e.target.value)}>
            <option value="">All Languages</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="col">
          <select className="form-select" value={countryFilter} onChange={e => setCountryFilter(e.target.value)}>
            <option value="">All Countries</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div className="col">
          <select className="form-select" value={genreFilter} onChange={e => setGenreFilter(e.target.value)}>
            <option value="">All Genres</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        {filteredMovies.map(movie => (
          <div key={movie.imdbmovieid} className="col-md-4 mb-3">
            <div className="card ">
              <img src={movie.moviemainphotos[0]} className="card-img-top single_movie" alt={movie.movietitle} />
              <div className="card-body">
                <h5 className="card-title"><b>{movie.movietitle}</b></h5>
                <p className="card-text"> <b>Languages:</b>  {movie.movielanguages.join(', ')}</p>
                <p className="card-text"> <b>Countries:</b>  {movie.moviecountries.join(', ')}</p>
                <p className="card-text"> <b>Genres:</b>  {movie.moviegenres.join(', ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
