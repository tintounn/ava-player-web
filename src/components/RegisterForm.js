import React, { Component } from 'react';
import { Button, Form, Input, Icon } from 'antd';

class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.handleOnRegisterBtnClick = this.handleOnRegisterBtnClick.bind(this);

    this.state = {};
  }

  componentWillMount() { }

  handleOnRegisterBtnClick(e) {
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
      <Form onSubmit={this.handleOnRegisterBtnClick} className="login-form">
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
          {getFieldDecorator('validation_password', {
            rules: [
              { 
                required: true, 
                message: 'La validation du mot de passe obligatoire!' 
              },
              {
                validator: (rule, value, callback) => {
                  const form = this.props.form;
                  if(value && value != form.getFieldValue('password')) {
                    callback('Le mot de passe doit etre le même.')
                  } else {
                    callback();
                  }
                }
              }
          ]})
          (
            <Input disabled={this.props.loading} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Validation mot de passe" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={this.props.loading} style={{ width: '100%' }}>
            S'inscrire
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(RegisterForm);
