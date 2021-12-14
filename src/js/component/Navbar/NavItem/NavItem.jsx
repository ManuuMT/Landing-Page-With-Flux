import React from "react";
import PropTypes from "prop-types";

const NavItem = prop => {
	return (
		<li className="nav-item">
            <div className="nav-link px-3" href="#">
				{prop.title}
			</div>
		</li>
	);
};

NavItem.propTypes = {
	title: PropTypes.string
};

export default NavItem;
