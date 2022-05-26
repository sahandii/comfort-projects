import { ModalComponentCSS } from "./ModalComponentCSS";
import { useRef, useState, useEffect } from "react";

export const ModalComponent = ({ activeItem, setActiveItem }) => {
	const description = useRef();
	const readmoreBtn = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [readmore, setReadmore] = useState(false);
	const [itemLogo, setItemLogo] = useState();
	useEffect(() => {
		activeItem ? setIsOpen(true) : setIsOpen(false);
		// if (activeItem) {
		// 	const urls = [
		// 		{
		// 			url: `https://api.themoviedb.org/3/movie/${activeItem.id}/images?&language=en-US&append_to_response=images&include_image_language=null,en&api_key=47179f260df8d482f7b4ffd06257a9d1`,
		// 		},
		// 	];
		// 	// Get logo of the selected movie
		// 	const getItemLogo = async () => {
		// 		let requests = urls.map((item) => fetch(item.url).then((response) => response.json()));
		// 		Promise.all(requests).then((datas) => {
		// 			datas.forEach((data, index, array) => {
		// 				const logos = data.logos;
		// 				let highestRating = Math.max(logos[index].vote_average);
		// 				logos.forEach((logo, index, array) => {
		// 					if (logo.vote_average === highestRating) {
		// 						setItemLogo(logo);
		// 					}
		// 				});
		// 			});
		// 		});
		// 	};
		// 	getItemLogo();
		// }

		if (activeItem) {
			const checkOverflow = () => {
				if (description.current.offsetHeight < description.current.scrollHeight || description.current.offsetWidth < description.current.scrollWidth) {
					readmoreBtn.current.style.display = "inline-block";
				} else {
					readmoreBtn.current.style.display = "none";
				}
			};
			window.addEventListener(
				"resize",
				() => {
					checkOverflow();
				},
				true,
			);
			checkOverflow();
		}
	}, [activeItem]);
	const removeActiveItem = () => {
		setIsOpen(false);
		setTimeout(() => {
			if (readmore) {
				setReadmore(!readmore);
			}
			if (itemLogo) {
				setItemLogo("");
			}
			setActiveItem("");
		}, 350);
	};
	return (
		<ModalComponentCSS>
			<div className={"movie-modal" + (isOpen ? " item-selected" : "")}>
				<div className="modal-component__wrapper white-bg">
					{activeItem ? (
						<>
							<div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w1280${activeItem.backdrop_path}')` }} className="backdrop-header container-fluid py-4 px-3 px-md-5">
								<div className="modal-component__content">
									<header className="row header-nav">
										<div className="d-flex align-items-center header-left col-6">
											<button
												onClick={() => {
													removeActiveItem();
												}}
												className="close-button white-border transparent-bg white black-hover white-bg-hover"
											>
												&#10005;
											</button>
										</div>
										<div className="d-flex align-items-center justify-content-end header-right col-6 text-end">
											<button
												title="Add to watchlist"
												onClick={() => {
													removeActiveItem();
												}}
												className="bookmark-it transparent-bg border-0"
											></button>
										</div>
									</header>
									<div className="row pt-4 py-5 text-center text-md-start">
										<div className="col-lg-10 offset-lg-1">
											<div className="row">
												<div className="mx-auto col-5 col-sm-4 col-xl-3 position-relative">
													<div className="white-line">
														<div className="poster-wrapper">
															<img draggable="false" className="w-100" src={`https://image.tmdb.org/t/p/w500/${activeItem.poster_path}`} alt={activeItem.title} />
														</div>
													</div>
												</div>
												<div className="mt-4 mt-md-0 ps-md-5 col-md-8 col-xl-9">
													<h2 className="active-item--title fw-bold white">{activeItem.title}</h2>
													{/* {itemLogo ? (
														<div className="offset-2 col-8 offset-sm-3 col-sm-6 offset-md-0 col-md-8 col-xl-6">
															<h2>
																<img className="w-100" style={{ objectPosition: "left", objectFit: "contain" }} src={"https://www.themoviedb.org/t/p/original/" + itemLogo.file_path} alt={activeItem.title} />
															</h2>
														</div>
													) : (
														<h2 className="active-item--title fw-bold white">{activeItem.title}</h2>
													)} */}
													<div className="details-bar white" style={{ opacity: 0.75 }}>
														<span className="white year-blip white-border rounded p-2 py-1">{activeItem.release_date.slice(0, 4)}</span>
														<span className="mx-2">|</span>
														{activeItem.genre_names.map((value, i) => (activeItem.genre_names[i + 1] ? <span key={activeItem.genre_ids[i]}>{value}, </span> : <span key={activeItem.genre_ids[i]}>{value} </span>))}
													</div>
													<p ref={description} className={"m-0 item--description white" + (readmore ? " expanded" : "")}>
														{activeItem.overview}
													</p>
													<p className="mt-1 m-0">
														<span
															ref={readmoreBtn}
															onClick={() => {
																setReadmore(!readmore);
															}}
															className="white read-more cursor-pointer"
														>
															<small>
																<u>{readmore ? "Show less" : "Read more"}</u>
															</small>
														</span>
													</p>
													<div className="mt-5 header-buttons position-relative">
														<button className="trailer-button transparent-bg white-border white rounded p-2 px-3 black-hover white-bg-hover">Watch trailer</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					) : (
						""
					)}
				</div>
				<div
					onClick={() => {
						removeActiveItem();
					}}
					className="backdrop"
				></div>
			</div>
		</ModalComponentCSS>
	);
};
