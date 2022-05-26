import styled from "styled-components";
import { direction, device } from "../../../assets/breakpoints";
import BookmarkSymbol from "../../../images/symbols/bookmark.svg";

// variables
// const borderRadius = "0.3em";

export const ModalComponentCSS = styled.div`
	.movie-modal {
		pointer-events:none;
	}
	.modal-component__wrapper {
		transition: transform .35s var(--ease-out-quint) .1s, width .35s var(--ease-out-quint) 0s;
		will-change: transform, width;
		pointer-events:auto;
		z-index:100;
		position:fixed;
		right:0;
		top:50%;
		width:100vw;
		height:100vh;
		overflow:hidden;
		transform:translate3d(100%, -50%, 0);
		@media ${direction.minWidth} ${device.tablet} {
			width:calc(100vw - 200px);
		}
	}
	.modal-component__content{
		position:relative;
		z-index:2;
	}
	.item-selected .poster-wrapper{
		transform:none;
		opacity:1;
	}
	.poster-wrapper {
		transform:translateY(-1em);
		transition: .5s var(--ease-out-quint) .25s;
		transition-property: transform, opacity;
		will-change: transform, opacity;
		opacity:0;
		border-radius: calc(.25rem + .5vw);
		overflow:hidden;
		border:1px solid rgba(255, 255, 255, .15);
		box-shadow:0 20px 30px -15px rgba(0,0,0, .3);
		@media ${direction.minWidth} ${device.desktop} {
			img{
				min-width:165px;
				max-width:230px;
			}
			position:absolute;
			top:0;
		}
	}
	.bookmark-it{
		width:2em;
		height:1.5em;
		background: transparent url(${BookmarkSymbol}) no-repeat center;
		background-size:contain;
	}
	.close-button{
		border-radius:99em;
		width:40px;
		height:40px;
	}
	@keyframes fadeInBackdrop {
		from {
			background-color: rgba(0, 0, 0, .9)
		}
		to {
			background-color: rgba(0, 0, 0, .6)
		}
	}
	.header-buttons .trailer-button {
		@media ${direction.minWidth} ${device.tablet} {
			position:absolute;
		}

	}
	.modal-component__wrapper .backdrop-header{
		position:relative;
		@media ${direction.minWidth} ${device.tablet} {
			padding-bottom:2.5em!important;
		}
		&:after {
			animation: fadeInBackdrop 3s linear 0s both;
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 0;
			backdrop-filter:blur(40px);
		}
		background-size:cover;
		background-repeat:no-repeat;
		background-position:center;
	}
	.item-selected .modal-component__wrapper{
		transform:translate3d(0, -50%, 0);
		box-shadow: -20px 0 60px rgba(0, 0, 0, 0.1);

	}
	span.read-more {
		font-weight:700;
	}
	.backdrop{
		opacity:0;
		visibility:hidden;
		pointer-events:none;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		top:0;
		width: 100vw
		height: 100vh;
		background:rgba(0, 0, 0, .5);
		z-index:90;
		transition: .2s linear 0s;
		transition-property: opacity, visibility;
		will-change: opacity, visibility;
	}
	.item-selected .backdrop {
		pointer-events:auto;
		opacity:1;
		visibility:visible;
	}
	.details-bar {
		margin: 1.25em 0 2em 0;
    	font-size: .75rem;
	}
	.item--description {
		font-weight:500;
		font-size:.95rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.item--description.expanded {
		overflow: inherit;
		display: inherit;
		-webkit-box-orient: inherit;
		-webkit-line-clamp: inherit;
	}
`;
