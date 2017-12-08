/*
 *
 * Login
 *
 */

import React, { PropTypes } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "!!style-loader!css-loader!./login.css";

const FormItem = Form.Item;

export class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrap">
        <div className="login-header">
          <div className="login-header-one">
            <h1>MBO - Shop.Experience.Empower</h1>
          </div>
          <div className="login-header-two">
            <h2>Account password login</h2>
          </div>
        </div>
        <div className="login-main">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  size="large"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="login-form-button"
              >
                Sign in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

export default compose(
  connect(state => ({ login: state.login })),
  Form.create()
)(Login);