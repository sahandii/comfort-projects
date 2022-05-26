import { React, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { SplideCSS } from "./SliderComponentCSS";
import { ReactComponent as ArrowRight } from "./img/arrow.svg";

export function SliderComponent({ category, items, title, setActiveItem }) {
	const splideCarousel = useRef();
	const getActiveItem = (event, item) => {
		const element = event.target.parentNode.parentNode.parentNode;
		if (element.classList.contains("is-active")) {
			setActiveItem(item);
		}
	};
	return (
		<SplideCSS ref={splideCarousel} className="mt-4">
			<div className="container-fluid px-3 px-lg-5">
				<h4 className="fw-light category-label pt-4 pb-3">{title}</h4>
			</div>
			<Splide
				options={{
					speed: 300,
					keyboard: "focused",
					isNavigation: true,
					// type: "loop",
					gap: "0",
					autoplay: false,
					rewind: true,
					updateOnMove: false,
					pagination: false,
					drag: false,
					waitForTransition: false,
				}}
			>
				{category
					? category.results.slice(0, items).map((item, index, array) => (
							<SplideSlide
								onClick={(e) => {
									getActiveItem(e, item);
								}}
								key={"slide-" + index}
								className=""
							>
								<div className="splide__slide--container position-relative h-100">
									<div className="title--bar position-absolute bottom-0 zi-1 w-100">
										<div className="title--container d-flex justify-content-between align-items-center">
											<h6 className="title fw-normal white m-0 mt-1">
												{item.title} <span className="year-blip white-border rounded p-1 ms-1">{item.release_date.slice(0, 4)}</span>
											</h6>
											<ArrowRight style={{ color: "white" }} width="15" height="100%" />
										</div>
									</div>
									<div className="backdrop-wrapper ratio ratio-16x9">
										<img className="backdrop" src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} alt={item.original_title} />
										<img className="backdrop-blurred" src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} alt={item.original_title} />
									</div>
								</div>
							</SplideSlide>
					  ))
					: ""}
			</Splide>
		</SplideCSS>
	);
}
