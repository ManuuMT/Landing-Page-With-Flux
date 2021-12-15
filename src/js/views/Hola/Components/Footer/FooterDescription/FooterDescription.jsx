import React from "react";
import PropTypes from "prop-types";

const FooterDescription = props => {
	return (
		<div className="container pb-5">
			<a className="contact-email" href="#">
				{props.email}
			</a>
			<p className="personal-text mt-5">
				Estaré encantado de conocerte, escucharte y ayudarte. Trabajemos
				juntos y construyamos algo increíble. Convirtamos tu idea en un
				proyecto aún mejor.
				<br />
				<a className="contact-link" href="#">
					Contáctame
				</a>
				.
			</p>
		</div>
	);
};

FooterDescription.propTypes = {
	email: PropTypes.string
};
export default FooterDescription;
