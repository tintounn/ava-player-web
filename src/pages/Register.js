import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

import { request, setLocalStorageItem } from './../utils';
import RegisterForm from '../components/RegisterForm';

export default class Register extends Component {

  constructor(props) {
    super(props);

    this.register = this.register.bind(this);

    this.state = {
      loading: false
    };
  }

  componentWillMount() {
  }

  register(values) {
    const urlParams = new URLSearchParams(window.location.search);
    this.setState({
      loading: true
    });

    request({method: 'post', url: '/register', data: {...values, token: urlParams.get('token')}}).then((res) => {
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
          <Redirect to={"/login"} />
        }

        <Row type="flex" style={{ height: '100%' }} align="middle" justify="center">
          <Col xs={{span: 12}} md={{span: 6}} lg={{span: 4}}>  
            <div style={{textAlign: 'center'}}>
              <span style={{fontSize: '32px'}}>Welcome </span>
            </div>
            <hr/>
            <RegisterForm loading={this.state.loading} onSubmit={this.register}/>
          </Col>
        </Row>
      </Layout>
    );
  }
}
