/*
 *
 * RegisterResult
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import "!!style-loader!css-loader!./RegisterResult"
import { defaultAction } from './actions';

export class RegisterResult extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

RegisterResult.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterResult);
