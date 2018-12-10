import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Button, Row, Input, Col, Layout } from 'antd';
import MovieCard from './MovieCard';

export default class MoviesCardList extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  render() {
    const movies = this.props.movies.map((elt) => {
      return (
        <Col key={elt._id} span={5}>
          <Link to={`/movies/${elt._id}`}>
            <span style={{margin: '40px'}}><MovieCard movie={elt} /></span>
          </Link>
        </Col>
      );
    });

    return (
      <Row gutter={32} type="flex" justify="center">
        {movies}
      </Row>
    );
  }
}
