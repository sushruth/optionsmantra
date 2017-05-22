import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {
	render() {
		return (
			<div className="top">
				<div className="flexParent shrinker topContainer">
					<div className="flexParent">
						<ul className="flexParent navlinks">
							<li>Stock Market</li>
							<li>Insurance</li>
							<li>Loans</li>
							<li>Others</li>
						</ul>
					</div>
					<div className="filler">&nbsp;</div>
					<div className="topButtons">
						<div className="flexParent">
							<div className="button active">Login</div>
							<div className="button">Sign up</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}