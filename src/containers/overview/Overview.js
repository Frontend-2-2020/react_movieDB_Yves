import React, { Component } from "react";
import Card from "../../components/card/Card";
import Axios from "axios";
import { API_key } from "../../config/config";
import { URL_overviews } from "../../config/config";
import Button from "../../components/button/Button";
import Spinner from "../../components/spinner/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

class Overview extends Component {
  state = {
    movies: [],
    loading: false,
    page: 1
  };

  //Fetching the Movies from the endpoint ,note:Axios uses variables set up in config.js
  getMovies() {
    Axios.get(URL_overviews + API_key + "&page=" + this.state.page).then(
      response => {
        console.log(response.data);
        this.setState({ movies: response.data.results, loading: false });
      }
    );
  }

  //Function used to go to the next page
  nextpageHandler = () => {
    this.setState({ page: this.state.page + 1 });
    this.getMovies();
  };

  //Function used to go to the previous page
  previouspageHandler = () => {
    if (this.state.page !== 1) {
      this.setState({ page: this.state.page - 1 });
    }
    this.getMovies();
  };

  //componentDidMount makes sure the function 'getMovies' is not executing in an infinite loop
  componentDidMount() {
    this.getMovies();
  }

  render() {
    //map through the fetched movies and put each movie in a bootstrap card
    const movieresults = this.state.movies;
    const myMovies = movieresults.map(movie => (
      <div className="col col-sm-auto col md-auto col-lg-auto" key={movie.id}>
        <Card
          title={movie.title}
          id={movie.id}
          description={movie.overview}
          poster={movie.poster_path}
          average={movie.vote_average}
          release={movie.release_date}
        />
      </div>
    ));

    //Set up a spinner for when the page is loading
    const currentloadstate = this.state.loading;
    const spin = <Spinner />;
    const loadmovies = (
      <div className="row justify-content-center">{myMovies}</div>
    );

    // if else statement ES6
    const pageIsLoaded = currentloadstate ? spin : loadmovies;
    setTimeout(() => spin, 1000);

    //const to style the page buttons inline (!!look into pagination later)
    const btnPrev = {
      margin: "20px",
      color: "green"
    };

    const btnNext = {
      margin: "20px",
      color: "red",
      float: "right"
    };

    return (
      <div>
        <Button
          clicked={this.previouspageHandler}
          name="Previous"
          style={btnPrev}
        />
        <Button clicked={this.nextpageHandler} name="Next" style={btnNext} />
        {pageIsLoaded}
      </div>
    );
  }
}

export default Overview;
