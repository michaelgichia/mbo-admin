/*
 *
 * RecentTransactions
 *
 */

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Table, Button, Card } from "antd";
import "!!style-loader!css-loader!./RecentTransactions.css"
// import { defaultAction } from './actions';

const data = [
  {
    key: "1",
    name: "Mac book air",
    price: 32,
    description: "MacBook Air features fifth-generation Intel Core processors and all-day battery life, yet it's still incredibly thin and light."
  },
  {
    key: "2",
    name: "Samsung s8",
    price: 42,
    description: "Elegant, fast and powerful."
  },
  {
    key: "3",
    name: "Ladies doll shoes",
    price: 32,
    description: "This christmas standout with beautiful shoes."
  },
  {
    key: "4",
    name: "Baby care products",
    price: 32,
    description: "Care for what is most important to you."
  }
];

export class RecentTransactions extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null
  };
  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };
  setPriceSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "price"
      }
    });
  };
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        filters: [{ text: "Mac book air", value: "Mac book air" }, { text: "Samsung s8", value: "Samsung s8" }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        sorter: (a, b) => a.price - b.price,
        sortOrder: sortedInfo.columnKey === "price" && sortedInfo.order
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.description || null,
        onFilter: (value, record) => record.description.includes(value),
        sorter: (a, b) => a.description.length - b.description.length,
        sortOrder: sortedInfo.columnKey === "description" && sortedInfo.order
      }
    ];
    return (
      <div style={{ marginBottom: 64 }}>
        <Card title={<span style={{paddingTop: 32, display: "block", fontSize: 24}}>Favourite Products</span>} bordered={false}>
            <div
              style={{
                fontSize: 16,
                color: "#807d7d",
                marginBottom: 32
              }}
            >
              <p>
                A list of most liked products by the users.
              </p>
            </div>
          <div className="table-operations">
            <Button onClick={this.setPriceSort}>Sort by date </Button>
            <Button onClick={this.clearFilters}>Clear filters</Button>
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            onChange={this.handleChange}
          />
        </Card>
      </div>
    );
  }
}

RecentTransactions.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentTransactions);