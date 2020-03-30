import React, { Component } from "react";
import Axios from "axios";
import { URL_overviews, API_key } from "../../config/config";
//////////////////////////////////////////
//!!Ignore this component, lack of time//
/////////////////////////////////////////
class SearchList extends Component {
  state = {
    movies: [],
    page: 1,
    searchResult: null
  };
  //getting the data for the movielist
  fetchMovieList() {
    Axios.get(URL_overviews + API_key + "&page=" + this.state.page).then(
      response => {
        this.setState({ movies: response.data.results });
      }
    );
  }
  //preventing the infinite loop
  componentDidMount() {
    this.fetchMovieList();
  }
  //get the value of the input field
  changeValueHandler = e => {
    const val = e.target.value;
    this.setState({ searchResult: val });
  };

  render() {
    const titleList = this.state.movies;

    //listing all individual movies ; was going to add a search function but ran out of time
    const individualTitles = titleList.map(movie => (
      <ul key={movie.title}>
        <li>{movie.title}</li>
      </ul>
    ));

    return (
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={this.changeValueHandler}
        />
        <button>Search</button>
        {individualTitles}
      </div>
    );
  }
}

export default SearchList;
