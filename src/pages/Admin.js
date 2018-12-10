import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Layout, Menu, Icon, Avatar, Input } from 'antd';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import { setLocalStorageItem, getLocalStorageItem, getRoleId, request } from '../utils';
import Download from './Admin/Download';
import Users from './Admin/Users';
import Movies from "./Admin/Movies";
import InvitationForm from '../components/InvitationForm';

const { Header, Content, Footer, Sider } = Layout;

class Admin extends Component {

  constructor(props) {
    super(props);

    this.generate = this.generate.bind(this);

    this.state = {
      url: ''
    };
  }

  componentWillMount() { 
    const roleId = getRoleId();
    if(roleId !== 1) {
      toast.error("Vous n'avez pas accès a cette page.");
    }
  }

  generate(values) {
    this.setState({
      loading: true
    });

    request({method: 'post', url: '/invitations', data: values}).then((res) => {
      this.setState({
        url: `${window.location.origin}/register?token=${res.data.invitation.token}`
      });
    }).catch((err) => {
      toast.error("Erreur lors de la connexion");
    });
  }

  render() {
    return (
      <Router>
        <Layout style={{ height: '100%' }}>
          <InvitationForm onSubmit={this.generate} />
          <Input readOnly={true} value={this.state.url} prefix={<Icon type="ellipsis" style={{ color: 'rgba(0,0,0,.25)' }} />} />
        </Layout>
      </Router>
    );
  }
}

export default Admin;
