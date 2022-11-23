import React, { Component } from 'react';
import ReactDom from 'react';

class Transaction extends Component {
  state = {};
  getData = () => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/development')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(data);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <h1> Department: {this.state.data?.department} </h1>
        <h1>Employees: {this.state.data?.employees}</h1>
        <h1>Manager: {this.state.data?.manager}</h1>
      </>
    );
  }
}

export default Transaction;
