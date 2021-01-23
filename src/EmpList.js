import React, { Component } from "react";
import EmpDetails from "./EmpDetails.js";
import axios from "axios";
import "./EmpList.css";
export default class EmpList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empdetails: [],
      allemp: [],
    };
  }

  getemp() {
    axios.get("http://localhost:8000/getemp").then((response) => {
      var result = response.data;
      this.setState({ allemp: result });
    });
  }
  sendempdetails(id) {
    var empdeatils = this.state.allemp.filter((empname) => empname.id === id);
    this.setState({ empdetails: empdeatils[0] });
  }
  render() {
    var empnames = this.state.allemp;
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <button className="button" onClick={(e) => this.getemp()}>
              GET Emplist
            </button>
            <h2>Emp List</h2>
            {empnames.map((empname) => (
              <div
                id={empname.id}
                className={"menu-link"}
                key={empname.id.toString()}
                onClick={(e) => this.sendempdetails(empname.id)}
              >
                {empname.empname}
              </div>
            ))}
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <EmpDetails deatils={this.state.empdetails} />
          </div>
        </div>
      </div>
    );
  }
}
