import styled from "styled-components";
// import { direction, device } from "../../assets/breakpoints";

export const SettingsPageCSS = styled.div`
	.settings--element {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5em 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		* {
			margin: 0;
		}
	}
	.settings--avatar {
		border-radius: 1em;
		background: #212529;
		box-shadow: 11px 11px 42px #171a1c, -11px -11px 42px #2b3036;
	}
`;
