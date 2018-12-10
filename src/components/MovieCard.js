import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Row, Input, Col, Card } from 'antd';

import { getTmdbPosterBaseUrl } from '../utils';

export default class MovieCard extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  render() {
    const { Meta } = Card;

    return (
      <Card hoverable cover={<img src={getTmdbPosterBaseUrl() + this.props.movie.poster_path}/>} >
        <Meta title={this.props.movie.name} />
      </Card>
    );
  }
}
