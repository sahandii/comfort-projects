import React, { useState } from "react";
import { Modal } from "bootstrap";

export const ModalButton = (props) => {
	const [modal, setModal] = useState(false);
	return (
		<>
			<button
				onClick={() => {
					setModal(true);
				}}
				data-bs-toggle="modal"
				data-bs-target="#modal"
				className={`p-2 px-3 ${props.className}`}
			>
				{props.title}
			</button>
			<ModalPopup modal={modal} setModal={setModal} {...props} />
		</>
	);
};

const ModalPopup = (props) => {
	return (
		<div
			className="modal fade"
			onClick={(e) => {
				if (e.target.classList.contains("fade")) {
					setTimeout(() => {
						props.setModal(false);
					}, 500);
				}
			}}
			id="modal"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
				<div className="modal-content bg-800 p-3">
					<div className="modal-header border-0">
						<h4 className="modal-title fw-normal" id="exampleModalLabel">
							{props.title}
						</h4>
						<button
							onClick={() => {
								setTimeout(() => {
									props.setModal(false);
								}, 500);
							}}
							tabIndex="0"
							style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.8148 0.966675L0.466797 2.31468L9.11884 10.9667L0.466903 19.6187L1.81491 20.9667L10.4668 12.3147L19.1188 20.9667L20.4668 19.6187L11.8149 10.9667L20.4669 2.31468L19.1189 0.966675L10.4668 9.61872L1.8148 0.966675Z' fill='%23ADFF00'/%3E%3C/svg%3E%0A")` }}
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">{props.modal ? props.element : ""}</div>
					<div className="modal-footer border-0">
						{props.prompt ? (
							<>
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
									Cancel
								</button>
								<button
									onClick={() => {
										props.handleSubmit();
									}}
									type="button"
									data-bs-dismiss="modal"
									className="fw-bold d-inline-flex justify-content-center border-0 rounded limegreen-bg semiblack p-2 px-3"
								>
									{props.prompt}
								</button>
							</>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
