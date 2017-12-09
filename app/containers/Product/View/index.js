/*
 *
 * View
 *
*/

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import "!!style-loader!css-loader!./view.css";

import { Table, Card, Divider, Icon, Button, List, Avatar, Modal } from "antd";

const data = [
  {
    key: 1,
    name: "John Brown",
    quantity: 32,
    price: 32,
    trending: "yes",
    condition: "new",
    filters: "color, sizes",
    subCategory: "Clothing, Shoes",
    avatar:
      "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190723/img9_i6yavg.png",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."
  },
  {
    key: 2,
    name: "Jim Green",
    quantity: 32,
    price: 42,
    trending: "no",
    condition: "generic",
    filters: "apple, hp",
    subCategory: "Electronics",
    avatar:
      "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190711/img78png_byf8eo.png",
    description:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  },
  {
    key: 3,
    name: "Joe Black",
    quantity: 32,
    price: 32,
    trending: "yes",
    condition: "new",
    filters: "men, women",
    subCategory: "Sports, Watches",
    avatar:
      "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190702/img1_fs9jmo.png",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."
  },
  {
    key: 4,
    name: "Joe Black",
    quantity: 89,
    price: 30,
    condition: "generic",
    filters: "apple, hp",
    subCategory: "Electronics",
    trending: "yes",
    avatar:
      "http://res.cloudinary.com/dw3arrxnf/image/upload/v1511190694/img4_sj379h.png",
    description:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  }
];

const records = {
  name: "",
  quantity: "",
  price: "",
  condition: "",
  filters: "",
  subCategory: "",
  trending: "",
  avatar:"",
  description:""
};

export class View extends React.Component {
  state = {
    modal2Visible: false,
    modal: {
      name: "",
      quantity: "",
      price: "",
      condition: "",
      filters: "",
      subCategory: "",
      trending: "",
      avatar:"",
      description:""
    }
  };

  setModal2Visible = (e, record, modal2Visible) => {
    this.setState({ modal2Visible, modal: record });
  };

  render() {
    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Price(Ksh)", dataIndex: "price", key: "price" },
      { title: "Quantity", dataIndex: "quantity", key: "quantity" },
      { title: "Trending", dataIndex: "trending", key: "trending" },
      {
        title: "Operations",
        dataIndex: "",
        key: "x",
        render: (text, record) => (
          <span>
            <Button
              onClick={(e, records, modal2Visible) =>
                this.setModal2Visible(e, record, true)}
            >
              View Poster
            </Button>
            <Divider type="vertical" />
            <Button>Update</Button>
            <Divider type="vertical" />
            <Button type="danger">Delete</Button>
          </span>
        )
      }
    ];
    return (
      <div>
        <Card bordered={false}>
          <div>Header</div>
          <div>
            <Table
              columns={columns}
              expandedRowRender={record => (
                <div className="table-list-item">
                  <div>
                    <Link className="table-item-header">
                      <header>{record.name}</header>
                      <Icon type="link" />
                    </Link>
                    <div className="table-item-wrap">
                      <span className="table-item-desc">
                        {record.description}
                      </span>
                      <br />
                      <span>Price: {record.price}</span>
                      <Divider type="vertical" />
                      <span>Quantity: {record.quantity}</span>
                      <Divider type="vertical" />
                      <span>Condition: {record.condition}</span>
                      <Divider type="vertical" />
                      <span>Sub-Category: {record.subCategory}</span>
                      <Divider type="vertical" />
                      <span>Filters: {record.filters}</span>
                    </div>
                  </div>
                  <div className="table-item-img">
                    <img src={record.avatar} alt={record.name} />
                  </div>
                </div>
              )}
              dataSource={data}
            />
          </div>
          <div>
            <Modal
              width={768}
              title={this.state.modal.name}
              wrapClassName="vertical-center-modal"
              visible={this.state.modal2Visible}
              onOk={(e, record, modal2Visible) => this.setModal2Visible(e, records, false)}
              onCancel={(e, record, modal2Visible) => this.setModal2Visible(e, records, false)}
            >
              <div className="table-item-img2">
                <img src={this.state.modal.avatar} alt={this.state.modal.name} />
              </div>
            </Modal>
          </div>
        </Card>
      </div>
    );
  }
}

View.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(View);