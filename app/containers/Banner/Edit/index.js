/*
 *
 * Edit
 *
 */

import React, { PropTypes } from 'react';
import { compose } from "redux";
import Upload from 'antd/lib/upload';
import message from 'antd/lib/message';
import Card from 'antd/lib/card';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import "!!style-loader!css-loader!./Edit.css";

const FormItem = Form.Item;
const Dragger = Upload.Dragger;
const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
};
const formTailLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 }
};

export class Edit extends React.Component {
  state = {
    checkNick: false
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info("success");
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked
      },
      () => {
        this.props.form.validateFields(["nickname"], { force: true });
      }
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const props = {
      name: "file",
      multiple: true,
      action: "//jsonplaceholder.typicode.com/posts/",
      onChange(info) {
        const status = info.file.status;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    return (
      <div>
        <div style={{ marginBottom: 32 }}>
          <Card title="Edit banner">
            <div
              style={{
                fontSize: 16,
                color: "#807d7d",
                marginBottom: 16
              }}
            >
              <p>Edit banner, change if it is active or not.</p>
            </div>
          </Card>
        </div>
        <div className="banner-wrap">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Dragger>
        <div style={{marginTop: 32}}>
          <FormItem {...formItemLayout} label="Banner">
            {getFieldDecorator("banner", {
              rules: [
                {
                  required: true,
                  message: "Please input your banner"
                }
              ]
            })(<Input placeholder="Please add banner image." />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Image url">
            {getFieldDecorator("url", {
              rules: [
                {
                  required: true,
                  message: "Please upload image again."
                }
              ]
            })(<Input placeholder="https://example.com/example.jpg" />)}
          </FormItem>
          <FormItem {...formTailLayout}>
            <Button type="primary" onClick={this.check}>
              Save banner
            </Button>
          </FormItem>
        </div>
        </div>
      </div>
    );
  }
}

Edit.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = ({}) => ({

// });

// const mapDispatchToProps = dispatch => ({
//   dispatch
// })

export default compose(Form.create())(Edit);