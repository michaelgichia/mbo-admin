/*
 *
 * Category View
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import "!!style-loader!css-loader!./View"
import { defaultAction } from './actions';

export class View extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

View.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(View);
