import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Row, Input, Col, Layout, Card, Divider } from 'antd';
import { Player } from 'video-react';

import MoviesCardList from '../components/MoviesCardList';
import { request, getTmdbPosterBaseUrl } from '../utils';
import Duration from '../components/Duration';

export default class Movie extends Component {

  constructor(props) {
    super(props);

    this.movieId = props.match.params.movieId;

    this.state = {
      movie: null
    };
  }

  componentWillMount() {
    this.getMovie();
  }

  getMovie() {
    request({method: "GET", url: '/movies/' + this.movieId}).then((res) => {
      this.setState({
        movie: res.data.movie
      });
    }).catch((err) => {
      toast.error('Erreur lors de la recuperation du film');
    });
  }

  render() {
    const { Header, Content, Footer } = Layout;

    if(!this.state.movie) {
      return <p>Loading...</p>
    }

    return (
      <Layout style={{ height: '100%' }}>
        <Content>
          <Row type="flex" justify="center">
            <Col span={12}>
            <Divider orientation="left"><b>{this.state.movie.name}</b></Divider>
              <Player poster={getTmdbPosterBaseUrl() + this.state.movie.background_path} fluid>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span={10}>
              <Divider orientation="left"><b>Informations</b></Divider>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col span={4}>
              <p><b>Date de sortie: {this.state.movie.release_date.split('T')[0]}</b></p>
              <p><b>Durée: <Duration duration={this.state.movie.duration}/></b></p>
              <p><b>Resolution: {this.state.movie.height}p</b></p>
              <p><b>Adulte: {this.state.movie.adult}</b></p>
            </Col>
            <Col span={6}>{this.state.movie.overview}</Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}
