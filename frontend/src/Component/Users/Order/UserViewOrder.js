import React, { Component, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../Navbar/uNavbar";
import { graphql } from "react-apollo";
import { getUserOrders } from "../../../queries/queries";

class UserViewOrder extends React.Component {

  displayOrder() {
    var data = this.props.data;
    console.log(data);
    if (data.loading) {
      return <div>Loading Order...</div>;
    } else {
      return (
        <div className="container">
          <div className="main-div-menu">
            <div className="panel" />
            <div>
              <h1 className="heading-menu">User Orders</h1>
              <div className="container">
                <div>
                  <table className="tables">
                    <thead>
                      <tr className="tbl-header">
                        <th>Date/Time</th>
                        <th>Restaurant ID</th>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Delivery Mode</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    {data.Order.map((food) => (
                      <tbody>
                        <tr>
                          <td>{food.ts} </td>
                          <td>{food.restaurant_id} </td>
                          <td>{food.user_id} </td>
                          <td>{food.user_name}</td>
                          <td>{food.deliverymode}</td>
                          <td>{food.orderstatus}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="body">
        <Navbar />
        {this.displayOrder()}
      </div>
    );
  }
}

export default graphql(getUserOrders, {
  options: (props) => ({
    variables: {
      user_id: localStorage.getItem("user_id"),
    },
  }),
})(UserViewOrder);