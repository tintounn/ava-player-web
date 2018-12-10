import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

export default class Check extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {}

  render() {    
    return (
      <Layout style={{ height: '100%' }}>
        <Row type="flex" style={{ height: '100%' }} align="middle" justify="center">
          <Col xs={{span: 12}} md={{span: 6}} lg={{span: 4}}>
            <h4>Recuperation de la session....</h4>
          </Col>
        </Row>
      </Layout>
    );
  }
}
