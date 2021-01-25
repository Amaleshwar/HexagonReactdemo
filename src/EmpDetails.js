import React, { Component } from "react";
import "./EmpDetails.css";
export default class EmpDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Emp Details</h2>
        {this.props.deatils.length !== 0 ? (
          <table>
              <tbody>
            <tr>
              <th>Employee Name</th>
              <td>{this.props.deatils.empname}</td>
            </tr>
            <tr>
              <th>ID</th>
              <td>{this.props.deatils.id}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{this.props.deatils.age}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{this.props.deatils.address}</td>
            </tr>
            </tbody>
          </table>
        ) : (
          <span>Please select employee to view details</span>
        )}
      </div>
    );
  }
}
