import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Row, Input, Col, Layout, Card } from 'antd';

import MoviesCardList from '../components/MoviesCardList';
import { request } from '../utils';

export default class Movies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentWillMount() {
    this.refreshMovies();
  }

  refreshMovies() {
    request({method: "GET", url: '/movies'}).then((res) => {
      this.setState({
        movies: res.data.movies
      });
    }).catch((err) => {
      toast.error('Erreur lors de la recuperation des films');
    });
  }

  render() {
    return (
      <MoviesCardList movies={this.state.movies}/>
    );
  }
}
