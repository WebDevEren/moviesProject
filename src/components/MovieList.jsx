import React from "react";

const MovieList = (props) => {
  // function handeClick(e) {
  //   console.log(e.pageY);
  // }

  return (
    <div className="row g-5">
      {props.movies.map((movie) => (
        <div key={movie.id} className="col-lg-4">
          <div className="card mb-4 shadow-sm h-100">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              alt="Sample Movie"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  onClick={() => props.deleteMovieProp(movie)}
                  className="btn btn-outline-danger btn-md"
                >
                  Delete
                </button>
                <h2>
                  <span className="badge bg-info">{movie.vote_average}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
