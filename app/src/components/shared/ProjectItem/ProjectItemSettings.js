export const ProjectItemSettings = (props) => {
	return (
		<ul className="dropdown--options dropdown-menu">
			<li>
				<button className="dropdown-item d-flex">Open</button>
			</li>
			<li>
				<button className="dropdown-item d-flex">Share</button>
			</li>
			<li>
				<hr className="dropdown-divider"></hr>
			</li>
			<li>
				<button //
					style={{ color: "var(--bs-danger)" }}
					className="danger dropdown-item d-flex"
					onClick={() => {
						console.log(props);
						props.deleteProject(props.projectId);
					}}
				>
					Delete project
				</button>
			</li>
		</ul>
	);
};
