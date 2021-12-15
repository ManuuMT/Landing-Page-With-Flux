import React from "react";
import PropTypes from "prop-types";

const FooterCta = props => {
	return (
		<div className="container py-5">
			<div className="line"></div>
			<h3 className="pt-3 contact-text">{props.text}</h3>
		</div>
	);
};

FooterCta.propTypes = {
	text: PropTypes.string
};
export default FooterCta;
