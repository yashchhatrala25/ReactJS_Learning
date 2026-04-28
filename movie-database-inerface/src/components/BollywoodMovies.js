import React, { useState } from "react";
import "./BollywoodMovies.css";

const bollywoodMovies = [
  {
    id: 1,
    title: "Bade Miya Chote Miya 2",
    rating: 8.9,
    genre: "Action",
    year: 2025,
    director: "Bala",
    image: "https://cdn.sacnilk.com/image/news/1681.jpg",
    cast: ["Akshay Kumar", "Tiger Shroff"],
  },
  {
    id: 2,
    title: "Fighter 2",
    rating: 9.2,
    genre: "Action",
    year: 2025,
    director: "Siddharth Anand",
    image:
      "https://media-cache.cinematerial.com/p/500x/ayw7q3vj/fighter-indian-movie-poster.jpg?v=1703491782",
    cast: ["Hritik Roshan", "Deepika Padukone"],
  },
  {
    id: 3,
    title: "Brahmastra 2",
    rating: 9.3,
    genre: "Fantasy",
    year: 2025,
    director: "Ayan Mukerji",
    image:
      "https://i.ytimg.com/vi/yabyo1xXsXo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAej5ijhIZPhzXrpMgOaWl-mH1EbA",
    cast: ["Ranbir Kapoor", "Alia Bhatt"],
  },
  {
    id: 4,
    title: "Pushpa 2",
    rating: 9.5,
    genre: "Action",
    year: 2025,
    director: "Sukumar",
    image:
      "https://cinetvartistcard.com/wp-content/uploads/2024/12/img_8803-1.jpg",
    cast: ["Allu Arjun", "Rashmika Mandana"],
  },
  {
    id: 5,
    title: "Chennai Express 2",
    rating: 7.8,
    genre: "Comedy",
    year: 2025,
    director: "Rohit Shetty",
    image:
      "https://images.moneycontrol.com/static-mcnews/2025/08/20250808074845_meenama.jpg?impolicy=website&width=1280&height=720",
    cast: ["Shah Rukh Khan", "Deepika Padukone"],
  },
];

const BollywoodMovies = () => {
  // state for loading indicator
  const [loading, setLoading] = useState(false);
  // state for genre filtering
  const [selectedGenre, setSelectedGenre] = useState("All");
  // state for movies
  const [movies, setMovies] = useState(bollywoodMovies);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");

  const getRatingCategory = (rating) => {
    if (rating >= 9.0) return 'blockbuster';
    if (rating >= 8.5) return 'superhit';
    if (rating >= 7.5) return 'hit';
    return 'average';
  }

  // { condition && <Component/> }
  // condition ? valueIfTrue : valueIfFalse
  return (
    <div className="bollywood-movies">
      <h1>BollywoodMovies</h1>

      {loading ? (
        <div className="loading-spinner">
          <p>Loading Bollywood Movies...</p>
        </div>
      ) : (
        <div className="main-content">
          <div className="movies-grid">
            {movies.map((movie) => (
              <div className={`movie-card ${getRatingCategory(movie.rating)}`} kay={movie.id}>
                <img
                  src={movie.image}
                  alt={`${movie.title} poster`}
                  className="movie-image"
                />
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
                <p className="movie-genre">{movie.genre}</p>
                <p className="movie-director">Dir: {movie.director}</p>
                <p className="movie-cast">Cast: {movie.cast.join(', ')}</p>
                <div className={`movie-rating rating-${getRatingCategory(movie.rating)}`}>{movie.rating}/10</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BollywoodMovies;
