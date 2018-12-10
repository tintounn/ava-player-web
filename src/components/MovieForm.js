import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Input, AutoComplete, Divider } from 'antd';

import SearchInput from "./SearchInput";
import { request } from '../utils';

class MovieForm extends Component {

  constructor(props) {
    super(props);

    this.handleOnSaveBtnClick = this.handleOnSaveBtnClick.bind(this);
    this.handleOnMovieSearch = this.handleOnMovieSearch.bind(this);
    this.handleOnMovieSelect = this.handleOnMovieSelect.bind(this);

    this.movie = this.props.movie || {};

    this.state = {
      loading: false,
      tmdbData: [],
    };
  }

  componentWillMount() { }

  save() {
    if(this.props.onSave) {
      this.props.onSave(this.movie);
    }
  }

  handleOnMovieSearch(value) {
    if(value) {
      request({
        method: 'GET',
        url: '/movies/search',
        params: {
          query: value
        }
      }).then((res) => {
        this.setState({
          tmdbData: res.data.movies
        });
      }).catch((err) => {
        toast.error('Erreur lors de la recherche des films.');
      });
    }
  }

  handleOnMovieSelect(movie) {
    this.movie = {
      ...this.state.movie,
      tmdb_id: movie.id,
      adult: movie.adult,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path
    };
    this.props.form.setFieldsValue({
      name: movie.original_name,
      release_date: movie.release_date,
      overview: movie.overview
    });
  }

  handleOnSaveBtnClick(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.movie = {...this.movie, ...values}
        this.save();
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleOnSaveBtnClick} className="login-form">
        <Form.Item>
          {getFieldDecorator('url', {
            rules: [{ required: (this.movie.id == undefined), message: "L'url de telechargement est obligatoire!" }],
          })(
            <Input placeholder="Url de telechargement" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Le nom du film est obligatoire!' }],
            initialValue: this.movie.name
          })(
            <SearchInput
              onSearch={this.handleOnMovieSearch}
              onSelect={this.handleOnMovieSelect}
              data={this.state.tmdbData}
              autoCompleteLabel={"original_title"}
              />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('release_date', {
            rules: [{ required: true, message: 'La date du film est obligatoire!' }],
            initialValue: this.movie.release_date
          })(
            <Input type="date" placeholder="Nom du film" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('overview', {
            rules: [{ required: true, message: 'Le résumé du film est obligatoire!' }],
            initialValue: this.movie.overview
          })(
            <Input.TextArea rows={4} type="text" placeholder="Résumé du film" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={this.state.loading} style={{ width: '100%' }}>
            Enregistrer
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(MovieForm);
