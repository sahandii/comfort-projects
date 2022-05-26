import { useState, useEffect, useRef } from "react";
import { ProjectsPageCSS } from "./ProjectsPageCSS";
import { db } from "../../firebase-config";
import { set, ref, onValue, remove } from "firebase/database";
import { uid } from "uid";
// hooks
import useGetBoundingClientRect from "../../hooks/useGetBoundingClientRect";
import { useLocalStorageState } from "ahooks";
// components
import { ProjectItem } from "../../components/shared/ProjectItem/ProjectItem";
import { ModalButton } from "../../components/shared/ModalButton/ModalButton";
import CreateProject from "../../components/CreateProject/CreateProject";
import { FilterView } from "../../components/ProjectsPage/FilterView/FilterView";

export default function ProjectsPage(props) {
	// ProjectsPage.js State
	const [project, setProject] = useState({});
	const [projects, setProjects] = useState([]);
	const [listView, setListView] = useLocalStorageState("userSettings", {
		listView: false,
	});

	// Refs
	const projectsContainerRef = useRef();
	// Lifecycle
	// useEffect(() => {}, []);

	/**
	 * C - Create
	 */
	const createProject = () => {
		const projectId = uid();
		set(ref(db, `/users/${props.auth.currentUser.uid}/project-${projectId}`), {
			...project,
			dateCreated: Date.now(),
			lastOpened: Date.now(),
			projectId,
		});
	};

	/**
	 * R - Read
	 */
	useEffect(() => {
		const setProjectItems = async () => {
			if (props.user) {
				onValue(ref(db, `/users/${props.auth.currentUser.uid}`), (snapshot) => {
					setProjects([]);
					const data = snapshot.val();
					if (data !== null) {
						Object.values(data).map((project) => {
							return setProjects((oldArray) => [...oldArray, project]);
						});
					}
				});
			}
		};
		setProjectItems();
	}, [props.user, props.auth.currentUser.uid]);
	/**
	 * D - Delete
	 */
	const deleteProject = async (uid) => {
		console.log(`${uid} removed`);
		remove(ref(db, `/users/${props.auth.currentUser.uid}/project-${uid}`));
	};

	const listProjects = Object.keys(projects).map(function (key, index) {
		const project = projects[key];
		return (
			<ProjectItem //
				key={key}
				id={key}
				listView={{ state: listView, set: setListView }}
				displayName={props.user.displayName}
				deleteProject={deleteProject}
				project={project}
			/>
		);
	});

	return (
		<div className="main col-12 col-lg-10 p-0">
			<ProjectsPageCSS>
				<header className="p-4 main-panel--header d-flex align-items-center justify-content-between">
					<h4 className="m-0">Projects</h4>
					<ModalButton
						className="btn btn-secondary" //
						title={"New Project"}
						element={<CreateProject handleSubmit={createProject} state={{ project: project, setProject: setProject }} />}
						prompt={null}
					/>
				</header>
				<main>
					<div className="main-panel--projects-wrapper d-flex flex-column py-4">
						<FilterView listView={{ state: listView, set: setListView }} />
						<ul
							ref={projectsContainerRef} //
							className={(listView ? "list-view d-flex flex-column " : "") + "px-4 main-panel--projects ls-none m-0 p-0 mt-4 pt-3 pb-5"}
							style={{ height: `calc(100vh - ${useGetBoundingClientRect(projectsContainerRef.current, "top") + "px"})` }}
						>
							{listProjects}
						</ul>
					</div>
				</main>
			</ProjectsPageCSS>
		</div>
	);
}
