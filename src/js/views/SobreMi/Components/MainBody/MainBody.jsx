import React from "react";

import MainBodyButtons from "../MainBodyButtons/MainBodyButtons.jsx";
import MainBodyContent from "../MainBodyContent/MainBodyContent.jsx";


const MainBody = () => {
	return (
		<div className="main-body">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="little-bar"></div>
					</div>
				</div>

				<div className="row mt-4">
					<div className="col main-title">
						<strong>SOBRE MI</strong>
					</div>
				</div>

				<MainBodyContent />

				<div className="row mt-5">
					<MainBodyButtons
						buttonText="SOLICITA TU LLAMADA"
						buttonClass="left-button w-100 py-3"
					/>
					<MainBodyButtons
						buttonText="CONTACTA CONMIGO"
						buttonClass="right-button w-100 py-3"
					/>
				</div>
			</div>
		</div>
	);
};

export default MainBody;
