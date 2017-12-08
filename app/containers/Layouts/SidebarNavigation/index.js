/*
 *
 * SidebarNavigation
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router";
import { Layout, Menu, Icon } from "antd";
import "!!style-loader!css-loader!./SidebarNavigation.css"

const { Header, Sider, Content } = Layout;

export class SidebarNavigation extends React.Component { 
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
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

SidebarNavigation.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = ({}) => ({

// });

// const mapDispatchToProps = dispatch => ({
//   dispatch
// })

//export default connect(mapStateToProps, mapDispatchToProps)(SidebarNavigation);
export default SidebarNavigation;
