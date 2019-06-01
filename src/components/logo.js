import React, { Component } from "react";

import { Link } from "react-router-dom";

class Logo extends Component {
	render() {
		const size = {
			height: this.props.size ? this.props.size : 105,
			width: this.props.size ? this.props.size : 105
		};

		return (
			<div className="logo-main-wrapper">
				<div className="logo-main">
					<Link to="/">
						<img style={size} alt="Photo goes here" src="/assets/DSlogo.png" />
					</Link>
				</div>
			</div>
		);
	}
}

export default Logo;
