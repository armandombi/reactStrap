import React from 'react';
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Page from './Page.jsx';

export default class Theme extends React.Component {
  render() {
    return (
     <div>
        <Navbar />
        <Jumbotron />
        <Page />
      </div>);
  }
}