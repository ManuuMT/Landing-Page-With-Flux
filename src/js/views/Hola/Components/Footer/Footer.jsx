import React from "react";
import FooterCta from "./FooterCta/FooterCta.jsx";
import FooterDescription from "./FooterDescription/FooterDescription.jsx";
import FooterContact from "./FooterContact/FooterContact.jsx";
import FooterCopy from "./FooterCopy/FooterCopy.jsx";

const Footer = () => {  
	return (
		<div className="container-fluid bg-black mt-5">
			<FooterCta text="Contacta Conmigo" />
			<FooterDescription email="me@manumaldonado.es" />
			<FooterContact
				mobile="+34 653 22 33 65"
				facebook="#"
				linkedin="#"
				github="#"
			/>
			<FooterCopy />
		</div>
	);
};

export default Footer;
