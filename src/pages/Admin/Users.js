import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Button, Row, Input, Col } from 'antd';

import {request} from "../../utils";
import InvitationForm from '../../components/InvitationForm';

export default class Users extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {

  }


  render() {
    return (
      <Row>
        <Col>
          <InvitationForm />
        </Col>
      </Row>
    );
  }
}
