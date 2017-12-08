/*
 *
 * Category Create
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import "!!style-loader!css-loader!./Create"
import { defaultAction } from './actions';

export class Create extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

Create.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({

});

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Create);
