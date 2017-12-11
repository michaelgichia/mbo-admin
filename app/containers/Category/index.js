/*
 *
 * Category Create
 *
 */

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import message from 'antd/lib/message';
import Popconfirm from 'antd/lib/popconfirm';
import Divider from 'antd/lib/divider';
import Card from 'antd/lib/card';
import Select from 'antd/lib/select';
import styles from "./styles.less";
// import "!!style-loader!css-loader!./Create"

const Option = Select.Option;
const Search = Input.Search;

export class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log({nextProps})
  //   if ("value" in nextProps) {
  //     this.setState({
  //       data: nextProps.value
  //     });
  //   }
  // }

  getRowByKey = (key) => {
    return this.state.data.filter((item) => item.key === key)[0];
  };

  index = 0;
  cacheOriginData = {};
  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.form.validateFieldsAndScroll((err, values) => {
    //   if (!err) {
    //     this.props.dispatch({
    //       type: "form/submit",
    //       payload: values
    //     });
    //   }
    // });
  };

  toggleEditable = (e, key) => {
    e.preventDefault();
    const target = this.getRowByKey(key);
    if (target) {
      // Save the original data when entering edit mode
      if (!target.editable) {
        this.cacheOriginData[key] = { ...target };
      }
      target.editable = !target.editable;
      this.setState({ data: [...this.state.data] });
    }
  };

  remove = (key) => {
    const newData = this.state.data.filter((item) => item.key !== key);
    this.setState({ data: newData });
    // this.props.onChange(newData);
  };

  newMember = () => {
    const newData = [...this.state.data];
    newData.push({
      key: `NEW_TEMP_ID_${this.index}`,
      workId: "",
      name: "",
      department: "",
      editable: true,
      isNew: true
    });
    this.index += 1;
    this.setState({ data: newData });
  };

  handleKeyPress = (e, key) => {
    if (e.key === "Enter") {
      this.saveRow(e, key);
    }
  };

  handleFieldChange = (e, fieldName, key) => {
    const newData = [...this.state.data];
    const target = this.getRowByKey(key);
    if (target) {
      target[fieldName] = e.target.value;
      this.setState({ data: newData });
    }
  };

  saveRow = (e, key) => {
    e.persist();
  };

  // saveRow = (e, key) => {
  //   e.persist();
  //   // save field when blur input
  //   setTimeout(() => {
  //     if (
  //       document.activeElement.tagName === "INPUT" &&
  //       document.activeElement !== e.target
  //     ) {
  //       return;
  //     }
  //     if (this.clickedCancel) {
  //       this.clickedCancel = false;
  //       return;
  //     }
  //     const target = this.getRowByKey(key) || {};
  //     if (!target.workId || !target.name || !target.department) {
  //       message.error("Please fill in the full member information.");
  //       e.target.focus();
  //       return;
  //     }
  //     delete target.isNew;
  //     this.toggleEditable(e, key);
  //     // this.props.onChange(this.state.data);
  //   }, 10);
  // };

  cancel = (e, key) => {
    this.clickedCancel = true;
    e.preventDefault();
    const target = this.getRowByKey(key);
    if (this.cacheOriginData[key]) {
      Object.assign(target, this.cacheOriginData[key]);
      target.editable = false;
      delete this.cacheOriginData[key];
    }
    this.setState({ data: [...this.state.data] });
  };

  handleSelectChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    const columns = [
      {
        title: "Category name",
        dataIndex: "name",
        key: "name",
        width: "20%",
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                autoFocus
                onChange={(e) => this.handleFieldChange(e, "name", record.key)}
                onBlur={(e) => this.saveRow(e, record.key)}
                onKeyPress={(e) => this.handleKeyPress(e, record.key)}
                placeholder="Category name"
              />
            );
          }
          return text;
        }
      },
      {
        title: "Category description",
        dataIndex: "workId",
        key: "workId",
        width: "40%",
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={(e) =>
                  this.handleFieldChange(e, "workId", record.key)
                }
                onBlur={(e) => this.saveRow(e, record.key)}
                onKeyPress={(e) => this.handleKeyPress(e, record.key)}
                placeholder="Category description"
              />
            );
          }
          return text;
        }
      },
      {
        title: "Is Category Featured",
        dataIndex: "department",
        key: "department",
        width: "20%",
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                defaultValue="false"
                style={{ width: 120 }}
                onChange={this.handleSelectChange}
              >
                <Option value="true">True</Option>
                <Option value="false">False</Option>
              </Select>
            );
          }
          return text;
        }
      },
      {
        title: "Operations",
        key: "action",
        render: (text, record) => {
          if (record.editable) {
            if (record.isNew) {
              return (
                <span>
                  <button>Save</button>
                  <Divider type="vertical" />
                  <Popconfirm
                    title="Do you want to delete this trip?"
                    onConfirm={() => this.remove(record.key)}
                  >
                    <button>delete</button>
                  </Popconfirm>
                </span>
              );
            }
            return (
              <span>
                <button>Save</button>
                <Divider type="vertical" />
                <button onClick={(e) => this.cancel(e, record.key)}>
                  cancel
                </button>
              </span>
            );
          }
          return (
            <span>
              <button onClick={(e) => this.toggleEditable(e, record.key)}>
                edit
              </button>
              <Divider type="vertical" />
              <Popconfirm
                title="Do you want to delete this trip?"
                onConfirm={() => this.remove(record.key)}
              >
                <button>delete</button>
              </Popconfirm>
            </span>
          );
        }
      }
    ];

    return (
      <div>
        <div style={{marginBottom: 32}}>
          <Card title="Category Page" bordered={false}>
            <div
              style={{
                fontSize: 16,
                color: '#807d7d',
                marginBottom: 16,
              }}
            >
            <p>A list of categories and search operations. Categories example: Electronics, Clothings, Sports e.t.c</p>
            </div>
          </Card>
        </div>

        <div style={{backgroundColor: "#fff", padding: "50px 24px"}}>
        <div className="search-wrap">
          <Search
            placeholder="Filter categories by name"
            onSearch={value => console.log(value)}
            size="large"
          />
          <Select
            defaultValue="false"
            style={{ width: 150 }}
            onChange={this.handleSelectChange}
            size="large"
          >
            <Option value="true">True</Option>
            <Option value="false">False</Option>
          </Select>
          <Button size="large" type="primary" icon="search">Search</Button>
          <Button size="large">Clear</Button>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.data}
          rowClassName={(record) => {
            return record.editable ? styles.editable : "";
          }}
        />
        <Button
          style={{ width: "100%", marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
          size="large"
        >
          Add Category
        </Button>
      </div>
      </div>
    );
  }
}

Category.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = ({}) => ({});

// const mapDispatchToProps = (dispatch) => ({
//   dispatch
// });

//export default connect(mapStateToProps, mapDispatchToProps)(Category);
export default Category;
