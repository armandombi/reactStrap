/*eslint-disable no-unused-vars*/
import React from 'react';
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Page from './Page.jsx';
/*eslint-enable no-unused-vars*/

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