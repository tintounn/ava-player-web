import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import YouTube from '@u-wave/react-youtube';

import { request, setLocalStorageItem } from './../utils';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.auth = this.auth.bind(this);

    this.state = {
      loading: false
    };
  }

  componentWillMount() {
  }

  auth(values) {
    this.setState({
      loading: true
    });

    request({method: 'post', url: '/auth', data: values}).then((res) => {
      setLocalStorageItem('token', res.data.token);
      setLocalStorageItem('user', res.data.user);
      this.setState({
        redirect: true
      });
    }).catch((err) => {
      this.setState({
        loading: false,
        code: ''
      });
      toast.error("Erreur lors de la connexion");
    });
  }

  render() {    
    return (
      <Layout style={{ height: '100%' }}>
        {this.state.redirect &&
          <Redirect to={"/"} />
        }

        <Row type="flex" style={{ height: '100%' }} align="middle" justify="center">
          <Col xs={{span: 12}} md={{span: 6}} lg={{span: 4}}>
            <YouTube video={"ZuuVjuLNvFY"} controls={false} modestBranding
                     showInfo={false} showRelatedVideos={false} volume={0.25}/>
            <div style={{textAlign: 'center'}}>
              <span style={{fontSize: '32px'}}>Ava </span><span style={{fontSize: '12px'}}>Media center</span>
            </div>
            <hr/>
            <LoginForm loading={this.state.loading} onSubmit={this.auth}/>
          </Col>
        </Row>
      </Layout>
    );
  }
}
