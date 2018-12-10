import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Row, Input, Col, Card } from 'antd';

import { getTmdbPosterBaseUrl } from '../utils';

export default class Duration extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  render() {
    let timer = (new Date(this.props.duration * 1000)).toISOString().substr(11, 8);

    return (
      <span>{timer}</span>
    );
  }
}
