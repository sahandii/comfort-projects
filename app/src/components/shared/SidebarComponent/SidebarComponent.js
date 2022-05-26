import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function SidebarComponent(props) {
	const location = useLocation();
	return (
		<div className="col-lg-2 p-0 sidebar d-none d-lg-flex flex-column justify-content-between">
			{/* Menu */}
			<ul className="sidebar--menu-panel ls-none p-0 m-0">
				<NavLink className="sidebar--menu-panel_link td-none white" to="/projects">
					<li className="sidebar--menu-panel_item p-3">
						<FontAwesomeIcon width="20" className="me-3" icon={faFile} />
						Projects
						{location.pathname === "/projects" && ( //
							<>
								<hr />
								<ul className="sidebar--submenu ls-none ps-2">
									<li className="py-2">
										<small>Recents</small>
									</li>
									<li className="py-2">
										<small>Shared with you</small>
									</li>
								</ul>
							</>
						)}
					</li>
				</NavLink>
				<NavLink className="sidebar--menu-panel_link td-none white" to="/propositions">
					<li className="sidebar--menu-panel_item p-3">
						<FontAwesomeIcon width="20" className="me-3" icon={faHandshakeSimple} />
						Propositions
					</li>
				</NavLink>
				<NavLink className="sidebar--menu-panel_link td-none white" to="/clients">
					<li className="sidebar--menu-panel_item p-3">
						<FontAwesomeIcon width="20" className="me-3" icon={faUserGroup} />
						Clients
					</li>
				</NavLink>
			</ul>
			{/* Bottom bar */}
			<ul className="sidebar--user-panel ls-none p-0 m-0">
				<NavLink className="sidebar--menu-panel_link td-none white" to="./settings">
					<li className="sidebar--menu-panel_item cursor-pointer sidebar--menu-item border-top d-flex justify-content-between align-items-center">
						<span className="user-panel--display-name">
							<small className="ms-3">{props.user.displayName}</small>
						</span>
						<div className="user-panel--avatar ratio ratio-1x1">
							<img referrerPolicy="no-referrer" src={props.user.photoURL} alt="" />
						</div>
					</li>
				</NavLink>
			</ul>
		</div>
	);
}
