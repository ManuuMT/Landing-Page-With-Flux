import React from "react";
import NavItem from "./NavItem/NavItem.jsx";
import NavItemSocial from "./NavItemSocial/NavItemSocial.jsx";
import ButtonCollapse from "./ButtonCollapse/ButtonCollapse.jsx";
import { Link } from "react-router-dom";


const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-black py-3 sticky-top">
			<div className="container-fluid">
				<span className="navbar-brand" href="#"></span>

				<ButtonCollapse />

				<div className="collapse navbar-collapse " id="navbarNav">
					<ul className="navbar-nav m-auto ">
                        <Link to="/">
                            <NavItem title="INICIO" />  
                        </Link>
                        <Link to="sobremi">
                            <NavItem title="SOBRE MI" />
                        </Link>
						<NavItem title="SERVICIOS" />
						<NavItem title="TRABAJOS" />
						<NavItem title="¿HOLA?" />
					</ul>

					<div className="nav-right">
						<ul className="navbar-nav d-flex flex-row">
							<NavItemSocial network="fab fa-facebook" />
							<NavItemSocial network="fab fa-linkedin" />
							<NavItemSocial network="fab fa-github" />
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;