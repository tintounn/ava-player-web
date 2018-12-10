import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Row, Input, Col } from 'antd';

import {request} from "../../utils";
import MovieForm from "../../components/MovieForm";

export default class Movies extends Component {

  constructor(props) {
    super(props);

    this.handleOnSave = this.handleOnSave.bind(this);

    this.state = {};
  }

  componentWillMount() {

  }

  handleOnSave(movie) {
    request({method: "POST", url: '/movies', data: movie}).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.error(err);
    })
  }

  render() {
    return (
      <MovieForm onSave={this.handleOnSave}/>
    );
  }
}
