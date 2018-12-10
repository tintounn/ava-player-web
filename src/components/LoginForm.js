import React, { Component } from 'react';
import { Button, Form, Input, Icon } from 'antd';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.handleOnAuthBtnClick = this.handleOnAuthBtnClick.bind(this);

    this.state = {};
  }

  componentWillMount() { }

  handleOnAuthBtnClick(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && this.props.onSubmit) {
        this.props.onSubmit(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleOnAuthBtnClick} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: "Le nom d'utilisateur obligatoire!" }],
          })(
            <Input disabled={this.props.loading} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nom d'utilisateur" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Le mot de passe obligatoire!' }],
          })(
            <Input disabled={this.props.loading} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Mot de passe" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={this.props.loading} style={{ width: '100%' }}>
            Connexion
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
