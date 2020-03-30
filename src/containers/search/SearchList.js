import React, { Component } from "react";
import Axios from "axios";
import { URL_overviews, API_key } from "../../config/config";

class SearchList extends Component {
  state = {
    movies: [],
    title: [],
    id: [],
    page: 1,
    searchResult: null
  };

  fetchMovieList() {
    Axios.get(URL_overviews + API_key + "&page=" + this.state.page).then(
      response => {
        this.setState({ movies: response.data.results });
      }
    );
  }

  componentDidMount() {
    this.fetchMovieList();
  }

  render() {
    const titleList = this.state.movies;
    // console.log(titleList);
    const individualTitles = titleList.map(movie => (
      <ul key={movie.title}>
        <li>{movie.title}</li>
      </ul>
    ));

    this.changeValueHandler = e => {
      const val = e.target.value;
      this.setState({ searchResult: val });
      // console.log(val);
    };

    return (
      <div>
        <input
          type="text"
          placeholder="search"
          onChange={this.changeValueHandler}
        />
        <button>go</button>

        {individualTitles}
      </div>
    );
  }
}

export default SearchList;
