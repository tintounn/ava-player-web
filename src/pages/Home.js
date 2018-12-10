import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Row, Input, Col, Layout, Card, Tabs } from 'antd';

import MoviesCardList from '../components/MoviesCardList';
import { request, getTokenData } from '../utils';
import Movies from './Movies';
import Admin from './Admin';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    let tokenData = getTokenData();

    return (
      <Layout style={{ height: '100%' }}>
        <Tabs  defaultActiveKey="1" size={"large"}>
          <Tabs.TabPane tab="Films" key="1"><Movies /></Tabs.TabPane>
          <Tabs.TabPane tab="Compte" key="3">Account page</Tabs.TabPane>
          {tokenData && tokenData.role == 1 &&
            <Tabs.TabPane tab="Admin" key="4">
              <Admin/>
            </Tabs.TabPane>
          }
        </Tabs> 
      </Layout>
    );
  }
}
