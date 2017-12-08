/*
 *
 * RegisterResult
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import "!!style-loader!css-loader!./RegisterResult.css"


export class RegisterResult extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="register-result-wrap">
        <h1>Registration Successful!</h1>
        <div>Please check your email to confirm your account.</div>
      </div>
    );
  }
}

RegisterResult.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};


export default RegisterResult;
