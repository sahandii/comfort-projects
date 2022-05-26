import styled from "styled-components";

const gray600 = "#6c757d";

export const StartPageCSS = styled.div`
	.sidebar,
	.main {
		height: 100vh;
	}
	/**
    * Sidebar
    */
	.sidebar {
		border-right: 1px solid ${gray600};
	}
	.sidebar--menu-panel_item {
		width: 100%;
	}
	.sidebar--menu-panel_link {
		display: flex;
		flex: 1;
		&.active {
			background: rgba(255, 255, 255, 0.05);
		}
		&:hover:not(.active) {
			background: rgba(0, 0, 0, 0.1);
		}
	}
	.user-panel--avatar {
		max-width: 50px;
		background-size: cover;
	}
	.main-panel--header {
		min-height: 91px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}
`;
