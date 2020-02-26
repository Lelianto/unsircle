import React, { Component } from 'react';
import Header from '../components/header';
import Admin from '../components/admin';

class Dashboard extends Component {
  render() {
    return (
    <div>
        <Header/>
        <Admin/>
    </div>
    );
  }
}

export default Dashboard;
