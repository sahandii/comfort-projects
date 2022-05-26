import { useLayoutEffect, useEffect, useRef } from "react";

const CreateProject = (props) => {
	const publishButtonRef = useRef();
	const nameRef = useRef();
	const clientRef = useRef();

	const clearInputs = () => {
		setTimeout(() => {
			let inputs = [nameRef.current, clientRef.current];
			inputs.forEach((element) => {
				element.value = "";
			});
			props.state.setProject({});
		}, 500);
	};

	useEffect(() => {
		if (nameRef.current.value && clientRef.current.value) {
			publishButtonRef.current.removeAttribute("disabled");
		} else {
			publishButtonRef.current.setAttribute("disabled", "");
		}
	});

	useLayoutEffect(() => {
		setTimeout(() => {
			nameRef.current.focus();
		}, 500);
	}, []);
	return (
		<>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-12 col-md-6">
						<input
							ref={nameRef}
							onChange={(e) => {
								props.state.setProject({ ...props.state.project, name: e.target.value });
							}}
							tabIndex="1"
							type="text"
							className="w-100 py-3 fs-3 fw-medium limegreen bg-800 border-bottom border-0 "
							id="exampleFormControlInput1"
							title="Name of the project"
							placeholder="Project name"
						></input>
					</div>
					<div className="col-12 col-md-6">
						<input
							ref={clientRef}
							onChange={(e) => {
								props.state.setProject({ ...props.state.project, client: e.target.value });
							}}
							tabIndex="2"
							type="text"
							className="w-100 py-3 fs-3 fw-medium limegreen bg-800 border-bottom border-0 "
							id="exampleFormControlInput1"
							placeholder="Client"
							title="Name of the client"
						></input>
					</div>
					<div className="mt-5 d-flex">
						<button
							onClick={(e) => {
								props.handleSubmit();
								clearInputs();
							}}
							type="submit"
							tabIndex="3"
							data-bs-dismiss="modal"
							className="btn btn-primary w-100 p-3 me-3"
							ref={publishButtonRef}
						>
							Publish
						</button>
						<button //
							onClick={(e) => {
								clearInputs();
							}}
							tabIndex="4"
							data-bs-dismiss="modal"
							className="btn btn-secondary w-100 p-3 ms-3"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateProject;
