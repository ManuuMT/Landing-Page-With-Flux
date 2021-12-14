import React from "react";
import PropTypes from "prop-types";

const MainBodyButtons = props => {
	return (
		<div className="col-md-6">
			<button className={props.buttonClass}>
				<strong> {props.buttonText} </strong>
			</button>
		</div>
	);
};

MainBodyButtons.propTypes = {
	buttonClass: PropTypes.string,
	buttonText: PropTypes.string
};

export default MainBodyButtons;
