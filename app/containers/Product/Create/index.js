/*
 *
 * Create
 *
 */

import React, { PropTypes } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  Form,
  Select,
  Switch,
  Button,
  Upload,
  InputNumber,
  Input,
  Icon,
  Tag,
  Tooltip,
  Row,
  Card,
  Col
} from "antd";
import Editor from "components/Editor";

const FormItem = Form.Item;
const Option = Select.Option;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function onInputnumberChange(value) {
  console.log("changed", value);
}

const fieldLabels = {
  name: "Title",
  url: "仓库域名",
  condition: "Condition",
  price: "Price",
  quantity: "Quantity",
  description: "Description",
  name2: "任务名",
  url2: "任务描述",
  owner2: "执行人",
  approver2: "责任人",
  dateRange2: "生效日期",
  type2: "任务类型"
};

export class Create extends React.Component {
  state = {
    tags: ["color"],
    inputVisible: false,
    inputValue: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter((tag) => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ""
    });
  };

  saveInputRef = (input) => (this.input = input);

  render() {
    const { getFieldDecorator } = this.props.form;
    const { tags, inputVisible, inputValue } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    return (
      <div>
        <div style={{marginBottom: 32}}>
          <Card title="Create product">
            <div
              style={{
                fontSize: 16,
                color: '#807d7d',
                marginBottom: 16,
              }}
            >
            <p>Create a product that stands as a single entity.</p>
            </div>
          </Card>
        </div>
      <Card title="Create product" style={{marginTop: 50,}}>
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label={fieldLabels.name}>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please enter the name of the product."
              }
            ]
          })(
            <Input
              size="large"
              placeholder="Please enter the name of the product."
            />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label={fieldLabels.description}>
          <Editor />
        </FormItem>

        <FormItem {...formItemLayout} label="Image / Images">
          <div className="dropbox">
            {getFieldDecorator("dragger", {
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <br />
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
                <br />
                <p className="ant-upload-hint">
                  Please a upload more photos if the products have more photos.
                </p>
              </Upload.Dragger>
            )}
          </div>
        </FormItem>

        <FormItem {...formItemLayout} label="Sub-Category" hasFeedback>
          {getFieldDecorator("select", {
            rules: [
              { required: true, message: "Please select your Sub-Category!" }
            ]
          })(
            <Select size="large" placeholder="Please select a Sub-Category">
              <Option value="china">Electronics</Option>
              <Option value="use">Clothing</Option>
            </Select>
          )}
        </FormItem>

        <FormItem {...formItemLayout} label={fieldLabels.condition}>
          {getFieldDecorator("condition", {
            rules: [{ message: "Please enter the product condition." }]
          })(
            <Input
              size="large"
              placeholder="Please enter the product condition."
            />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label={fieldLabels.price}>
          {getFieldDecorator("price", {
            rules: [
              { required: true, message: "Please enter the product price." }
            ]
          })(
            <InputNumber
              size="large"
              min={1}
              max={10000000}
              setFieldsValue={1}
              onChange={onInputnumberChange}
            />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label={fieldLabels.quantity}>
          {getFieldDecorator("quantity", {
            rules: [{ message: "Please enter the product quantity." }]
          })(
            <InputNumber
              size="large"
              min={1}
              max={10000000}
              setFieldsValue={1}
              onChange={onInputnumberChange}
            />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Trending">
          {getFieldDecorator("switch", { valuePropName: "checked" })(
            <Switch />
          )}
        </FormItem>

        <FormItem {...formItemLayout} label="Filter">
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={tag} closable afterClose={() => this.handleClose(tag)}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}
          {inputVisible && (
            <Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              placeholder="Add a product filter"
              style={{ width: 200, height: 40 }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag
              onClick={this.showInput}
              style={{
                background: "#fff",
                borderStyle: "solid",
                padding: "10px 14px",
                height: 40
              }}
            >
              <Icon type="plus" /> Edit/delete/add new filter
            </Tag>
          )}
        </FormItem>

        <FormItem wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
      </Card>
         </div>
    );
  }
}

Create.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = ({}) => ({

// });

// const mapDispatchToProps = dispatch => ({
//   dispatch
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Create);
export default compose(Form.create())(Create);
