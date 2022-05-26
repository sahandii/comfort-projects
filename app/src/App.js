import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Hooks
import { useFetch } from "usehooks-ts";
// Pages
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import StartPage from "./pages/StartPage/StartPage";
import { Auth } from "./pages/Auth/Auth";
// Global CSS
import { createGlobalStyle } from "styled-components";

// Global CSS
const GlobalStyles = createGlobalStyle`
	html {
		scroll-behavior: smooth;
	}
	body {
		-webkit-font-smoothing: antialiased;
		font-family: "Rubik";
		background-color:var(--semiblack);
	}
	.wrapper {
	min-height: 100vh;
	overflow:hidden;
}
	:root {
		--ease-out-quint: cubic-bezier(0.230, 1.000, 0.320, 1.000);
		--ease-in-out-quint: cubic-bezier(0.860, 0.000, 0.070, 1.000);
	}
	svg, svg path {
		fill: currentColor;
	}
	`;

const App = () => {
	// Auth state
	const [user, setUser] = useState();

	// onAuthStateChanged(auth, (currentUser) => {
	// 	setUser(currentUser);
	// });
	const { data, error } = useFetch("https://840e-212-97-249-50.eu.ngrok.io/test", {
		credentials: "include",
	});
	return (
		<>
			<GlobalStyles />
			{!user ? (
				<div className="wrapper vw-100">
					<BrowserRouter>
						<Routes>
							<Route path="*" element={<WelcomePage auth={"test"} user={user} />} />
							<Route exact path="auth/:token" element={<Auth />} />
						</Routes>
					</BrowserRouter>
				</div>
			) : (
				<div className="wrapper vw-100">
					<StartPage auth={"test"} user={user} />
				</div>
			)}
		</>
	);
};

export default App;
