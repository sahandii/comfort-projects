export const PropositionsPage = () => {
	return (
		<div className="main col-12 col-lg-10 p-0">
			<header className="p-4 main-panel--header d-flex align-items-center justify-content-between">
				<h4 className="m-0">Propositions</h4>
				<a href="https://app.dinero.dk/390039/tradeoffers/create" target="_blank" rel="noopener noreferrer">
					<button className="p-2 px-3 btn btn-secondary">New Proposition</button>
				</a>
			</header>
			<div className="p-4">
				{/* Button Group */}
				<div className="btn-group btn-group-sm" role="group" aria-label="Basic radio toggle button group ">
					<input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked></input>
					<label className="btn btn-outline-secondary p-2 px-3" htmlFor="btnradio1">
						In progress
					</label>
					<input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"></input>
					<label className="btn btn-outline-secondary p-2 px-3" htmlFor="btnradio3">
						Accepted
					</label>
				</div>
			</div>
		</div>
	);
};
