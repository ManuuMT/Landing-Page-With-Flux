import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Inicio } from "./views/Inicio/Inicio.jsx";
import { SobreMi } from "./views/SobreMi/SobreMi.jsx";
import { Hola } from "./views/Hola/Hola.jsx";
import injectContext from "./store/appContext";
import Navbar from "./component/Navbar/Navbar.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar/>
                    <Switch>
						<Route exact path="/">
							<Inicio />
						</Route>
						<Route exact path="/sobremi">
							<SobreMi />
						</Route>
                        <Route exact path="/footer">
							<Hola />
						</Route>
						<Route>
							<h1>Page Not found!</h1>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
