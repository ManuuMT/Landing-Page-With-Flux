import React from "react";
import PropTypes from "prop-types";

const FooterContact = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="mobile-number col-lg-6 col-sm-12">
					<p>Llámame</p>
					<a href={props.mobile}>{props.mobile}</a>
				</div>
				<div className="social-media col-lg-6 col-sm-12">
					<p>Redes Sociales</p>
					<p>
						<a href={props.facebook}>Facebook</a>/
						<a href={props.linkedin}>Linkedin</a>/
						<a href={props.github}>Github</a>
					</p>
				</div>
			</div>
		</div>
	);
};

FooterContact.propTypes = {
	mobile: PropTypes.string,
	facebook: PropTypes.string,
	linkedin: PropTypes.string,
	github: PropTypes.string
};
export default FooterContact;
