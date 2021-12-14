import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Inicio } from "./views/Inicio.jsx";
import { SobreMi } from "./views/SobreMi.jsx";
import injectContext from "./store/appContext";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Switch>
						<Route exact path="/">
							<Inicio />
						</Route>
						<Route exact path="/sobremi">
							<SobreMi />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
