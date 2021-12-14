import React from "react";

const Intro = () => {
	return (
		<section className="container-fluid bg-black d-flex">
			<div className="container">
				<div className="row d-flex flex-column pt-5">
					<div className="col-12 main-col mt-5">
						<h3 id="intro-name">Hola, Soy Manu Maldonado</h3>
						<h1 id="intro-title">
							Te ayudo a crecer tu negocio con tecnologías de
							primera.
						</h1>
						<img
							className="hero-pic"
							src="https://i.imgur.com/3G5FMwg.jpg"
							alt="hero"
						/>
					</div>

					<div className="col-12">
						<div className="d-flex flex-row align-items-center">
							<a href="#" className="scroll-button">
								Haz scroll para conocerme
							</a>
							<div className="line-intro mx-2"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;