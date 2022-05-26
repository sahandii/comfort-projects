import styled from "styled-components";
import { direction, device } from "../../../assets/breakpoints";

const borderRadius = "0.3em";

export const SplideCSS = styled.div`
	.splide__track {
		overflow: visible;
		margin-left: 2em !important;
		margin-right: 2em !important;
	}
	.splide__slide {
		transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1) 0s, opacity 0.1s cubic-bezier(0.77, 0, 0.175, 1) 0s;
		will-change: opacity, transform;
		cursor: pointer;
		width: 100%;
		@media ${direction.minWidth} ${device.mobile} {
			max-width: 400px;
		}
		max-width: 75vw;
		transform: scale(0.9);
		opacity: 0.75;
		border: none !important;
	}
	.splide__slide.is-active {
		opacity: 1;
		transform: scale(1);
	}
	h4.category-label {
		opacity: 0.65;
		letter-spacing: 0.015em;
	}
	.backdrop-wrapper {
		position: relative;
	}
	img.backdrop {
		border-radius: ${borderRadius};
	}
	img.backdrop-blurred {
		transform: scale(0.95);
		pointer-events: none;
		transition: opacity 0.35s ease-out 0s;
		opacity: 0;
		top: 1em;
		filter: blur(25px) brightness(0.8);
		z-index: -1;
	}
	.splide__slide.is-active img.backdrop-blurred {
		opacity: 1;
	}
	.splide__slide.is-active .title--bar {
		opacity: 1;
	}
	.title--bar {
		padding: 1em;
		position: relative;
		opacity: 0;
		/* text-shadow: 0 0 25px black; */
		&:after {
			opacity: 1;
			z-index: -1;
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(14, 110, 253, 0.5);
			border-bottom-right-radius: ${borderRadius};
			border-bottom-left-radius: ${borderRadius};
			backdrop-filter: blur(10px);
		}
	}
	.title--bar {
		pointer-events: none;
	}
	.splide__slide.is-active .title--container h6 {
		animation: slideUp 0.25s cubic-bezier(0.77, 0, 0.175, 1) both 0.05s;
	}
	.splide__arrow {
		opacity: 1 !important;
		background: white !important;
	}
	.splide__arrow svg {
		width: 13px !important;
		fill: var(--limegreen) !important;
	}
	.title--container h6 {
		pointer-events: none;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		@media ${direction.minWidth} ${device.tablet} {
			font-size: inherit;
		}
		font-size: calc(0.5rem + 1vw);
	}
	.year-blip {
		transform: scale(0.8);
		display: inline-flex;
		transform-origin: left;
	}
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(50%);
		}
		to {
			opacity: 1;
			transform: translateY(0%);
		}
	}
`;
