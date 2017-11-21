import React from 'react';

export default class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">ReactStrap</a>
        </div>
        <div id="navbar">
          <ul className="nav navbar-nav">
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#"></a>About</li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
        
			</nav>);
	}
}