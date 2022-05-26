import { StartPageCSS } from "./StartPageCSS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import { PropositionsPage } from "../PropositionsPage/PropositionsPage";
import { ClientsPage } from "../ClientsPage/ClientsPage";
import SidebarComponent from "../../components/shared/SidebarComponent/SidebarComponent";

export default function StartPage(props) {
	return (
		<>
			<StartPageCSS>
				<div className="bg-800 h-100 white container-fluid">
					<div className="row">
						<BrowserRouter>
							<SidebarComponent user={props.user} />
							<Routes>
								<Route path="*" element={<ProjectsPage auth={props.auth} user={props.user} />} />
								<Route exact path="/propositions" element={<PropositionsPage auth={props.auth} user={props.user} logout={props.logout} />} />
								<Route exact path="/clients" element={<ClientsPage auth={props.auth} user={props.user} logout={props.logout} />} />
								<Route exact path="/settings" element={<SettingsPage auth={props.auth} user={props.user} logout={props.logout} />} />
							</Routes>
						</BrowserRouter>
					</div>
				</div>
			</StartPageCSS>
		</>
	);
}
