import React, { Component } from "react";
import MovieList from "./MovieList.jsx";
import SearchBar from "./SearchBar.jsx";
import axios from "axios";

class App extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  deleteMovie = async (movie) => {
    axios.post
    (
      `https://api.themoviedb.org/3/list/8265249/remove_item?media_id=${movie.id}&session_id=6d8251b17c18d6717d0f3eff89d3e4f0b0224689&api_key=1dedf153389cd2f3dac00c66ce3d5aa2`
    );
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState(() => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/list/8265249?api_key=1dedf153389cd2f3dac00c66ce3d5aa2&language=en-US"
    );
    console.log(response.data.items);
    this.setState({ movies: response.data.items });
  }

  render() {
    let filterMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filterMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}
export default App;
