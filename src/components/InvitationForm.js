import React, { Component } from 'react';
import { Button, Form, Input, Icon, Checkbox } from 'antd';

class InvitationForm extends Component {

  constructor(props) {
    super(props);

    this.handleOnInvitationBtnClick = this.handleOnInvitationBtnClick.bind(this);

    this.state = {};
  }

  componentWillMount() { }

  handleOnInvitationBtnClick(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err && this.props.onSubmit) {
        this.props.onSubmit(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleOnInvitationBtnClick} className="login-form">
        <Form.Item>
          {getFieldDecorator('role', {
            rules: [{ required: true, message: "L'id du role est obligatoire!" }],
          })(
            <Input disabled={this.props.loading} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="number" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('is_adult', {
            valuePropName: 'checked',
          })(
            <Checkbox>Personne adulte</Checkbox>
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={this.props.loading} style={{ width: '100%' }}>
            Generer
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(InvitationForm);
