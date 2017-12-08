/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import withProgressBar from 'components/ProgressBar';

class App extends React.PureComponent {
  render() {
    return (
      <main style={{minHeight: "100%", width: "100%", position: "relative", display: "block"}}>
        {React.Children.toArray(this.props.children)}
      </main>
    );
  }
}

export default withProgressBar(App);