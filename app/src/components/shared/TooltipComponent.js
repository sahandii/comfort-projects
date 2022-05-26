import { useEffect } from "react";
import { Tooltip } from "bootstrap";

export const TooltipComponent = ({ children, className, position, title }) => {
	useEffect(() => {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new Tooltip(tooltipTriggerEl);
		});
	}, []);
	return (
		<div className={`${className ?? ""} d-inline-flex`} data-bs-toggle="tooltip" data-bs-placement={position} title={title}>
			{children}
		</div>
	);
};
