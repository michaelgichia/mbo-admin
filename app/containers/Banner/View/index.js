/*
 *
 * View
 *
 */

import React, { PropTypes } from "react";
import Select from 'antd/lib/select';
import message from 'antd/lib/message';
import Card from 'antd/lib/card';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import List from 'antd/lib/list';
import { connect } from "react-redux";
import shortid from "shortid";
import styles from "./styles.less";

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const { Meta } = Card;
const Search = Input.Search;
const pageSize = 5;
const listData = [];

for (let i = 0; i < 21; i++) {
  listData.push({
    id: shortid.generate(),
    href: "/#",
    title: `Banner ${i}`,
    star: 1,
    like: 200,
    banner: "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511184460/banner1_wgw1j4.png",
    description:
      "Here you will see very stylish banneras covers which enhance your banneras beauty more so.",
  });
}

export class View extends React.Component {
  fetchMore = () => {
    this.props.dispatch({
      type: "list/fetch",
      payload: {
        count: pageSize
      }
    });
  };

  render() {
    const loading = false;
    const loadMore =
      listData.length > 0 ? (
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Button
            onClick={this.fetchMore}
            style={{ paddingLeft: 48, paddingRight: 48 }}
          >
            {loading ? (
              <span>
                <Icon type="loading" /> loading...
              </span>
            ) : (
              "load more"
            )}
          </Button>
        </div>
      ) : null;

    const pagination = {
      pageSize: 10,
      current: 1,
      total: listData.length,
      onChange: (() => {}),
    };

    return (
      <div>
        <div style={{ marginBottom: 32 }}>
          <Card title="Banners view" bordered={false}>
            <div
              style={{
                fontSize: 16,
                color: "#807d7d",
                marginBottom: 16
              }}
            >
              <p>A list of banners</p>
            </div>
          </Card>
        </div>

        <div>
          <Card
            style={{ marginTop: 24, paddingTop: 16 }}
            bordered={false}
            bodyStyle={{ padding: "8px 32px 32px 32px" }}
          >
            <div className="banners-filter-div2">
              <header>Banners Operations</header>
            </div>
            <div className="banners-filter-div1">
              <label htmlFor="">Search for banner by name:</label>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
              <label htmlFor="">Toggle banners:</label>
              <Select defaultValue="all" style={{ width: 200 }} onChange={handleChange}>
                <Option value="all">All Banners</Option>
                <Option value="true">Active</Option>
                <Option value="false">Not Active</Option>
              </Select>
            </div>
          </Card>
        </div>

        <div className="ant-spin-container-wrap">
          <Card
            style={{ marginTop: 24, paddingTop: 50 }}
            bordered={false}
            bodyStyle={{ padding: "8px 32px 32px 32px" }}
          >
            <List
              size="large"
              loading={listData.length === 0 ? loading : false}
              rowKey="id"
              itemLayout="horizontal"
              loadMore={loadMore}
              dataSource={listData}
              pagination={pagination}
              renderItem={item => (
                <Card
                  cover={
                    <img
                      alt="example"
                      src={item.banner}
                    />
                  }
                  actions={[
                    <Icon type="setting" />,
                    <Icon type="edit" />,
                    <Icon type="ellipsis" />
                  ]}
                >
                  <Meta
                    title={item.title}
                    description={item.description}
                  />
                </Card>
              )}
            />
          </Card>
        </div>
      </div>
    );
  }
}

View.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = ({}) => ({

// });

// const mapDispatchToProps = dispatch => ({
//   dispatch
// })

export default connect(null, null)(View);
