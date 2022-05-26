import { useState, useEffect } from "react";
import { SettingsPageCSS } from "./SettingsPageCSS";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { TooltipComponent } from "../../components/shared/TooltipComponent";

export default function SettingsPage(props) {
	const [visma, setVisma] = useState(false);
	let navigate = useNavigate();
	const logOut = async () => {
		await signOut(props.auth).then(() => {
			navigate("/");
			console.log("Signed out");
		});
	};

	const highResAvatar = () => {
		let avatarUrl = props.user.photoURL.slice().replace("s96", "s400");
		return avatarUrl;
	};

	const fetchVisma = async () => {};

	return (
		<div className="main col-12 col-lg-10 p-0">
			<SettingsPageCSS>
				<header className="user-details bg-900 py-4">
					<div className="container-fluid p-4">
						<div className="row">
							<div className="col-4 col-md-3 col-lg-2">
								<img draggable="false" className="d-block ratio ratio-1x1 settings--avatar" referrerPolicy="no-referrer" src={highResAvatar()} alt="" />
							</div>
							<div className="zi-1 col-8 col-md-9 col-lg-10 d-flex justify-content-center flex-column">
								<h3>{props.user.displayName}</h3>
								<h6 className="fw-normal text-600">{props.user.email}</h6>
								<div className="mt-2">
									<button
										onClick={() => {
											logOut();
										}}
										className="btn btn-outline-danger white-hover"
										style={{ color: "var(--bs-danger)" }}
									>
										{/* <LogoutSymbol width="15" className="me-2" /> */}
										<small>Sign out</small>
									</button>
								</div>
							</div>
						</div>
					</div>
				</header>
				{/* <header className="p-4 main-panel--header">
					<h4 className="m-0">Settings</h4>
				</header> */}
				<main>
					<div className="main-panel--projects-wrapper d-flex flex-column p-4">
						<ul className="settings ls-none m-0 p-0">
							<li className="settings--element">
								<div className="flex flex-column">
									<div className="d-flex align-items-center">
										<h6>Visma Connect</h6>
										<TooltipComponent //
											className="ms-2"
											position="right"
											title="Log in to connect with the Dinero API"
										>
											<FontAwesomeIcon className="text-500" width="20" icon={faCircleQuestion} />
										</TooltipComponent>
									</div>
									<h6>
										<small className={"d-flex mt-2 fw-normal" + (visma ? " limegreen" : " text-600")}>{visma ? "Connected" : "Not connected"}</small>
									</h6>
								</div>
								<div>
									<a target="_blank" href={`https://connect.visma.com/connect/authorize?client_id=isv_comfortoasisaps&response_mode=form_post&response_type=code&scope=dineropublicapi:read+dineropublicapi:write+offline_access&redirect_uri=https://840e-212-97-249-50.eu.ngrok.io/authorize&ui_locales=da-DK`}>
										<button //
											className={"btn " + (visma ? "btn-secondary" : "btn-primary")}
											onClick={() => {
												setVisma(!visma);
											}}
										>
											{visma ? "Disconnect" : "Sign in"}
										</button>
									</a>
								</div>
							</li>
							{/* <li className="settings--element">
								<h6>Dark theme</h6>
								<div>{props.user.email}</div>
							</li> */}
						</ul>
					</div>
				</main>
			</SettingsPageCSS>
		</div>
	);
}
