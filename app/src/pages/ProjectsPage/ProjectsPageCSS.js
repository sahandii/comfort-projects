import styled from "styled-components";
// import { direction, device } from "../../assets/breakpoints";

export const ProjectsPageCSS = styled.div`
	/**
    * Projects item - Grid
    */
	ul.main-panel--projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-auto-flow: dense;
		grid-gap: 1em;
		overflow-y: scroll;
	}
	/**
	 ** List view
	**/
	.list-view {
		grid-gap: 0 !important;
	}
	ul.main-panel--projects.list-view > div:hover {
		background-color: rgba(255, 255, 255, 0.1) !important;
	}
	ul.main-panel--projects.list-view > div:nth-child(odd) {
		background-color: rgba(255, 255, 255, 0.025);
	}
	/**
	 ** More button (three dots)
	 */
	.option-button--container button.show {
		background: white;
	}
	.option-button--container > button {
		background: transparent;
		border-radius: 0.3em;
		border: 0;
		&:hover {
			box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
		}
		&:after {
			content: "";
			background-size: 7px;
			background-position: center;
			background-repeat: no-repeat;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5' height='10' viewBox='0 0 5 25'%3E%3Cg fill-rule='evenodd'%3E%3Ccircle cx='2.5' cy='2.5' r='2.5'%3E%3C/circle%3E%3Ccircle cx='2.5' cy='12.5' r='2.5'%3E%3C/circle%3E%3Ccircle cx='2.5' cy='22.5' r='2.5'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	.list-view .option-button--container button {
		&:hover {
			box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) !important;
		}
		&:after {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='5' height='10' viewBox='0 0 5 25'%3E%3Cg fill='%23FFF' fill-rule='evenodd'%3E%3Ccircle cx='2.5' cy='2.5' r='2.5'%3E%3C/circle%3E%3Ccircle cx='2.5' cy='12.5' r='2.5'%3E%3C/circle%3E%3Ccircle cx='2.5' cy='22.5' r='2.5'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
		}
	}
	.list-view .option-button--container button.show {
		&:after {
			filter: invert(1);
		}
	}
	ul.dropdown--options {
		font-size: 0.75rem;
	}
`;
