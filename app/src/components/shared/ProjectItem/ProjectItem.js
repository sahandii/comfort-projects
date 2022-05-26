import { useState, useEffect } from "react";
import { ProjectItemMoreButton } from "./ProjectItemMoreButton";
import { ProjectItemSettings } from "./ProjectItemSettings";
import { ProjectItemCSS } from "./ProjectItemCSS";
import moment from "moment";
import { useRafInterval } from "ahooks";

export function ProjectItem(props) {
	/**
	 * Project Item - Last Opened
	 */
	// State
	const [lastOpened, setLastOpened] = useState("");
	// Timestamp
	const timestamp = moment(props.project.lastOpened).fromNow();
	// On Mount
	useEffect(() => {
		setLastOpened(timestamp);
	}, [timestamp]);
	// Update timestamp every minute
	useRafInterval(() => {
		// New time
		const newTime = moment(props.project.lastOpened).fromNow();
		if (lastOpened !== newTime) {
			setLastOpened(newTime);
		}
	}, 60000);

	// First name only (Could be HoC ??)
	const getFirstName = () => {
		const firstName = props.displayName.split(" ").slice(0, -1).join(" ");
		return firstName;
	};

	return (
		<>
			<ProjectItemCSS>
				{props.listView.state ? (
					<li className="project-item--container cursor-pointer p-4 w-100">
						<div className="d-flex">
							<div className="col-5 col-lg-7 d-flex align-items-center">
								<h6 className="text-overflow m-0 pe-1 pe-lg-5">{props.project.name}</h6>
							</div>
							<div className="col-1 d-flex justify-content-end">
								<ProjectItemMoreButton>
									<ProjectItemSettings deleteProject={props.deleteProject} projectId={props.project.projectId} />
								</ProjectItemMoreButton>
							</div>
							<div className="date col-3 col-lg-2 d-flex align-items-center">
								<p className="ms-auto m-0">
									<small>{lastOpened}</small>
								</p>
							</div>
							<div className="author col-3 col-lg-2 d-flex align-items-center">
								<p className="ms-auto m-0">
									<small>{getFirstName()}</small>
								</p>
							</div>
						</div>
					</li>
				) : (
					<div className="project-item--container position-relative">
						<li className="main-panel--projects-item ratio ratio-4x3">
							<div className="project-title-bar">
								<div className="upper-bar d-flex align-items-center justify-content-between">
									<h6 className="text-overflow fw-medium mb-1">
										<small>{props.project.name}</small>
									</h6>
									<ProjectItemMoreButton>
										<ProjectItemSettings deleteProject={props.deleteProject} projectId={props.project.projectId} />
									</ProjectItemMoreButton>
								</div>
								<p className="m-0">
									<small>
										<span className="date">{lastOpened}</span>
										<span className="mx-2">&#8226;</span>
										<span className="author">{getFirstName()}</span>
									</small>
								</p>
							</div>
						</li>
					</div>
				)}
			</ProjectItemCSS>
		</>
	);
}
