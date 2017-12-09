/**
*
* Editor
*
*/

import React from "react";
import pell from "pell";
import "!!style-loader!css-loader!./editor.css";

const mapActions = actions => {
  if (actions) {
    return actions.map(e => {
      if (typeof e === "object" && e.result) {
        return { ...e, result: () => e.result(pell) };
      }
      return e;
    });
  }
  return actions;
};

class Editor extends React.PureComponent {
  componentDidMount() {
    const {
      onChange,
      actions,
      styleWithCSS,
      actionBarClass,
      buttonClass,
      contentClass,
      defaultContent
    } = this.props;

    // initialize pell editor
    pell.init({
      element: this.container,
      onChange: html => this.handleChange(html),
      actions: mapActions(actions),
      styleWithCSS,
      classes: {
        actionbar: actionBarClass,
        button: buttonClass,
        content: contentClass
      }
    });

    // set default content
    this.container.content.innerHTML = defaultContent;
  }

  handleChange = html => {
    console.log(html);
  };

  componentDidUpdate() {
    const { defaultContent } = this.props;
    if (this.container.content.innerHTML !== defaultContent) {
      this.container.content.innerHTML = defaultContent;
    }
  }

  getContent = () => this.container.content.innerHTML;

  render() {
    return (
      <div
        ref={e => (this.container = e)}
        className={this.props.containerClass}
      />
    );
  }
}

Editor.propTypes = {};

Editor.defaultProps = {
  defaultContent: "",
  styleWithCSS: true,
  actions: [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "heading1",
    "heading2",
    "olist",
    "ulist",
    "quote",
    "code",
    "line",
    "link"
  ],
  containerClass: "pell",
  actionBarClass: "pell-actionbar",
  buttonClass: "pell-button",
  contentClass: "pell-content"
};

export default Editor;