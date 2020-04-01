import React, { Component } from "react";
import Axios from "axios";
import { URL_detail, API_key_detail } from "../../config/config";
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
    Axios.get(URL_detail + this.props.match.params.id + API_key_detail).then(
      response => {
        const detailMovie = response.data;
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
      }
    );
  }
  //preventing infinite loop of the this.getDetail method
  componentDidMount() {
    this.getDetail();
  }

  render() {
    const { details } = this.state;
    const { genres } = this.state;
    const { productionHouses } = this.state;
    const { votes } = this.state;

    //passing props to Detailcard component
    const detail = (
      <Detailcard
        title={details.title}
        budget={details.budget}
        bdp={details.backdrop_path}
        overview={details.overview}
        release={details.release_date}
        //looping trough the vote integer and return the jsx icon
        actualvotes={(() => {
          let darkstars = [];
          for (let i = 0; i < parseInt(votes); i++) {
            darkstars.push(<FaStar key={i} />);
          }
          return darkstars;
        })()}
        //total of 10 - number of votes and returning the jsx icon
        restvotes={(() => {
          let blankstars = [];
          for (let i = 10; i > parseInt(votes); i--) {
            blankstars.push(<FaRegStar key={i} />);
          }
          return blankstars;
        })()}
        //looping trough the genres and set it as a prop to be passed into the detailcard component
        gen={genres.map(genre => (
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

    return <div>{detail}</div>;
  }
}

export default Detail;
