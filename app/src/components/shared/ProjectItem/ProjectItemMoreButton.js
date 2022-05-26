export function ProjectItemMoreButton(props) {
	return (
		<>
			<div className="d-flex align-items-center dropdown option-button--container position-relative">
				<button type="button" data-bs-toggle="dropdown" aria-expanded="false" className="p-2 options-button d-inline-flex align-items-center py-3 px-3 position-relative"></button>
				{props.children}
			</div>
		</>
	);
}
