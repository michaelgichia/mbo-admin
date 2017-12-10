/*
 *
 * DashboardView
 *
 */

import React, { PropTypes } from "react";
import { Icon, Tooltip, Card } from "antd";
import { connect } from "react-redux";
import RecentUsers from "containers/RecentUsers";
import RecentTransactions from "containers/RecentTransactions";
import "!!style-loader!css-loader!./DashboardView.css";
// import { defaultAction } from './actions';

const styles = {
  card: { width: "calc(33.3333% - 16px)", margin: 8 }
};

export class DashboardView extends React.Component {
  state = {
    isProductFetching: false,
    isBoughtProductsFetching: false,
    isNewUsers: false
  };
  render() {
    const {
      isProductFetching,
      isBoughtProductsFetching,
      isNewUsers
    } = this.state;
    return (
      <div>
        <div className="dashboard-card-shortcuts">
          <button className="dashboard-card-bt-pro"><span>Create Product</span></button>
          <button className="dashboard-card-bt-cats"><span>Create Category</span></button>
          <button className="dashboard-card-bt-ban"><span>Create Banner</span></button>
        </div>
      
        <div className="dashboard-view-panel">
          <div className="dashboard-card">
            <div className="dashboard-card-head">
              <span>Number of products</span>
              <div>
                <Tooltip
                  placement="top"
                  title={<span>Number of products in your database</span>}
                >
                  <Icon type="info-circle-o" />
                </Tooltip>
              </div>
            </div>
            <div className="dashboard-card-value">126,560</div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-head">
              <span>Number of users</span>
              <div>
                <Tooltip
                  placement="top"
                  title={
                    <span>Number of user in enrolled to the platform</span>
                  }
                >
                  <Icon type="info-circle-o" />
                </Tooltip>
              </div>
            </div>
            <div className="dashboard-card-value">1,960</div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-head">
              <span>Products payments</span>
              <div>
                <Tooltip
                  placement="top"
                  title={<span>Transctions made online</span>}
                >
                  <Icon type="info-circle-o" />
                </Tooltip>
              </div>
            </div>
            <div className="dashboard-card-value">18,000,400</div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-head">
              <span>Profits</span>
              <div>
                <Tooltip
                  placement="top"
                  title={<span>Total profits made on transctions</span>}
                >
                  <Icon type="info-circle-o" />
                </Tooltip>
              </div>
            </div>
            <div className="dashboard-card-value">1,050,590</div>
          </div>
        </div>

        <RecentTransactions />
          <RecentUsers />

      </div>
    );
  }
}

DashboardView.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);