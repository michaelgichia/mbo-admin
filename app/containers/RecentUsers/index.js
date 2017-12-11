/*
 *
 * RecentUsers
 *
 */

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Table from 'antd/lib/table';
import Card from 'antd/lib/card';
import reqwest from "reqwest";
// import "!!style-loader!css-loader!./RecentUsers"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  },
  {
    title: "Phone number",
    dataIndex: "cell"
  }
];

export class RecentUsers extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false
  };
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters
    });
  };
  fetch = (params = {}) => {
    console.log("params:", params);
    this.setState({ loading: true });
    reqwest({
      url: "https://randomuser.me/api",
      method: "get",
      data: {
        results: 10,
        ...params
      },
      type: "json"
    }).then(data => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination
      });
    });
  };
  componentDidMount() {
    this.fetch();
  }
  render() {

    console.log({state: this.state.data})
    return (
      <div>
        <Card title={<span style={{paddingTop: 32, display: "block", fontSize: 24}}>New Registered Users</span>} bordered={false}>
          <div
            style={{
              fontSize: 16,
              color: "#807d7d",
              marginBottom: 32
            }}
          >
            <p>A list of newly registered users.</p>
          </div>
          <div>
            <Table
              columns={columns}
              rowKey={record => record.registered}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              loading={this.state.loading}
              onChange={this.handleTableChange}
            />
          </div>
        </Card>
      </div>
    );
  }
}

RecentUsers.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentUsers);