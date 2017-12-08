/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router";
import "!!style-loader!css-loader!./app.css";

const { Header, Sider, Content } = Layout;

export default class App extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    collapsed: false
  };

  static propTypes = {
    children: React.PropTypes.node
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className="style-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="style-sidebar">
          <div className="style-logo">
            <Link to="/">
              <img src="" alt="" />
              <h1>MBO Admin</h1>
            </Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="style-header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {React.Children.toArray(this.props.children)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}