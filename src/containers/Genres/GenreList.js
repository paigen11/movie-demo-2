import React, { Component } from 'react';
import { withLastLocation } from 'react-router-last-location';
import MovieList from '../../components/Movie/MovieList';
import * as movieAPI from '../../services/movieAPI';

class GenreList extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    if (this.props.match.params) {
      try {
        const movies = await movieAPI.getMoviesByGenre(
          this.props.match.params.genreId,
        );
        this.setState({ movies, loading: false });
      } catch (err) {
        this.setState({ loading: false, error: true });
      }
    }
  }

  render() {
    let pathname;
    if (this.props.lastLocation === null) {
      pathname = '/genres';
    } else {
      pathname = this.props.lastLocation.pathname;
    }

    return (
      <>
        <i
          className="fa fa-chevron-left"
          onClick={() => this.props.history.push(`${pathname}`)}
          aria-hidden="true"
        />
        <p>Back to Genres</p>
        <h1>{this.props.match.params.genreName} Movies</h1>
        <MovieList
          loading={this.state.loading}
          error={this.state.error}
          movies={this.state.movies}
        />
      </>
    );
  }
}

export default withLastLocation(GenreList);
