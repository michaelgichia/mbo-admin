/*
 *
 * SidebarNavigation
 *
 */

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Link, browserHistory } from "react-router";
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
          width={300}
          collapsed={this.state.collapsed}
          className="style-sidebar"
        >
          <div className="style-logo">
            <Link to="/">
              <img src="" alt="" />
              <h1>MBO ADMIN</h1>
            </Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="21">
              <button onClick={() => browserHistory.push("/stores/dashboard")}>
                <Icon type="dashboard" />Dashboard
              </button>
            </Menu.Item>
            <Menu.Item key="6">
              <button onClick={() => browserHistory.push("/category")}>
                <Icon type="appstore" />Category
              </button>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="skin" />Products
                </span>
              }
            >
              <Menu.Item key="1">
                <button onClick={() => browserHistory.push("/product")}>
                  View Product
                </button>
              </Menu.Item>
              <Menu.Item key="2">
                <button onClick={() => browserHistory.push("/product/create")}>
                  Create Product
                </button>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="picture" />Banner
                </span>
              }
            >
              <Menu.Item key="10">
                <button onClick={() => browserHistory.push("/banner")}>
                  View Banners
                </button>
              </Menu.Item>
              <Menu.Item key="9">
                <button onClick={() => browserHistory.push("/banner/create")}>
                  Create Banner
                </button>
              </Menu.Item>
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
                <button onClick={() => browserHistory.push("/")}>
                  <Icon type="logout" /> Sign Out
                </button>
              </Menu.Item>
              <Menu.Item key="110">
                <button onClick={() => browserHistory.push("/register")}>
                  <Icon type="user-add" /> Create Account
                </button>
              </Menu.Item>
              <Menu.Item key="120">
                <button onClick={() => browserHistory.push("/")}>
                  <Icon type="login" /> Sign In
                </button>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="22">
              <Icon type="global" /> Mbo site
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="style-header">
            <Button
              type="primary"
              onClick={this.toggle}
              style={{ marginBottom: 16 }}
            >
              <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
            </Button>
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