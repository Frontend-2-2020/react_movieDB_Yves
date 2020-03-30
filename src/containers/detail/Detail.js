import React, { Component } from "react";
import Axios from "axios";
import Detailcard from "../../components/detailcard/Detailcard";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

class Detail extends Component {
  state = {
    details: {},
    genres: [],
    productionHouses: [],
    votes: []
  };

  //fetching the data for the detail page
  getDetail() {
    Axios.get(
      "https://api.themoviedb.org/3/movie/" +
        this.props.match.params.id +
        "?api_key=dc37b97357fd291174e896aa7ce44636"
    ).then(response => {
      const detailMovie = response.data;
      console.log(detailMovie);
      const genre = detailMovie.genres;
      const prodHouses = detailMovie.production_companies;
      const voteAverage = detailMovie.vote_average;

      //Pushing the fetched data into the new state, (initial state is empty)
      this.setState({
        details: detailMovie,
        genres: genre,
        productionHouses: prodHouses,
        votes: voteAverage
      });
    });
  }
  //preventing infinite loop of the this.getDetail method
  componentDidMount() {
    this.getDetail();
  }

  render() {
    const movieDetails = this.state.details;
    const myGenres = this.state.genres;
    const productionHouses = this.state.productionHouses;
    const movieVotes = this.state.votes;
    console.log(movieVotes);

    //passing props to Detailcard component
    const details = (
      <Detailcard
        title={movieDetails.title}
        budget={movieDetails.budget}
        bdp={movieDetails.backdrop_path}
        overview={movieDetails.overview}
        release={movieDetails.release_date}
        //looping trough the vote integer and return the jsx icon
        actualvotes={(() => {
          let darkstars = [];
          for (let i = 0; i < parseInt(movieVotes); i++) {
            darkstars.push(<FaStar key={i} />);
          }
          return darkstars;
        })()}
        //total of 10 - number of votes and returning the jsx icon
        restvotes={(() => {
          let blankstars = [];
          for (let i = 10; i > parseInt(movieVotes); i--) {
            blankstars.push(<FaRegStar key={i} />);
          }
          return blankstars;
        })()}
        //looping trough the genres and set it as a prop to be passed into the detailcard component
        gen={myGenres.map(genre => (
          <span className="badge badge-dark m-1" key={genre.name}>
            {genre.name}
          </span>
        ))}
        //looping trough the prod houses and set it as a prop to be passed into the detailcard component
        prod={productionHouses.map(prodHouse => (
          <span className="badge badge-dark m-1" key={prodHouse.name}>
            {prodHouse.name}
          </span>
        ))}
      />
    );

    return <div>{details}</div>;
  }
}

export default Detail;
