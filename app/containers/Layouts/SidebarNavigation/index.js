/*
 *
 * SidebarNavigation
 *
 */

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Layout, Menu, Icon, Button } from "antd";
import "!!style-loader!css-loader!./SidebarNavigation.css";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

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
        <Sider
          trigger={null}
          collapsible
          width={250}
          collapsed={this.state.collapsed}
          className="style-sidebar"
        >
          <div className="style-logo">
            <Link to="/">
              <img src="" alt="" />
              <h1>MBO Admin</h1>
            </Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="skin" />Products
                </span>
              }
            >
              <Menu.Item key="1">View Product</Menu.Item>
              <Menu.Item key="2">Create Product</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="appstore" />Category
                </span>
              }
            >
              <Menu.Item key="6">View Category</Menu.Item>
              <Menu.Item key="5">Create Category</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="picture" />Banner
                </span>
              }
            >
              <Menu.Item key="9">Create Banner</Menu.Item>
              <Menu.Item key="10">View Banners</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub6"
              title={
                <span>
                  <Icon type="user" />Account
                </span>
              }
            >
              <Menu.Item key="19">
                <Icon type="logout" /> Sign Out
              </Menu.Item>
              <Menu.Item key="110">
                <Icon type="user-add" /> Create Account
              </Menu.Item>
              <Menu.Item key="120">
                <Icon type="login" /> Sign In
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="style-header">
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="3">
              <Button type="primary" onClick={this.toggle} style={{ marginBottom: 16 }}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
            </Menu.Item>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
          </Menu>
          </Header>
          <Content
            style={{
              padding: 24,
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