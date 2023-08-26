import React, { Component } from "react";

class SearchBar extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };
  
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search a Movie"
              onChange={this.props.searchMovieProp}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
