import React, { Component } from "react";

class Logo extends Component {
	render() {

		const size = {
			height: this.props.size ? this.props.size : 105,
			width: this.props.size ? this.props.size : 105
		}

		return (
			<div className="logo-main-wrapper">
				<div className="logo-main">
					<img style={size} alt="Photo goes here" src="/assets/DSlogo.png" />
				</div>
			</div>
		);
	}
}

export default Logo;
