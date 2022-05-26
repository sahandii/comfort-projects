import styled from "styled-components";

export const ProjectItemCSS = styled.div`
	li.main-panel--projects-item {
		overflow: hidden;
		position: relative;
		cursor: pointer;
		width: 100%;
		border-radius: 10px;
		background-size: contain;
		border: 1px solid white;
	}
	.project-title-bar {
		color: #333;
		font-size: 80%;
		padding: 1em;
		position: absolute;
		bottom: 0;
		top: inherit;
		left: inherit;
		right: inherit;
		width: inherit;
		height: inherit;
		background: white;
	}
`;
