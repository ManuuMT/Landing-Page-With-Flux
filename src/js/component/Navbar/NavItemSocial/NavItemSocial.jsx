import React from "react";
import PropTypes from "prop-types";

const NavItemSocial = prop => {
	return (
		<li className="nav-item active mx-1">
			<a className="nav-link" href="#">
				<i className={prop.network}></i>
			</a>
		</li>
	);
};

NavItemSocial.propTypes = {
	network: PropTypes.string
};

export default NavItemSocial;
