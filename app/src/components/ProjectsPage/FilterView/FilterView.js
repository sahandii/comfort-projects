export const FilterView = (props) => {
	const listView = props.listView.state;
	return (
		<div className="main-panel--filter-panel d-flex w-100 justify-content-start px-4">
			<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
				<input //
					onClick={
						props.listView.state
							? () => {
									props.listView.set(false);
							  }
							: null
					}
					type="radio"
					className="btn-check"
					name="btnradio"
					id="btnradio1"
					autoComplete="off"
					defaultChecked={!listView ? true : false}
				></input>
				<label title="Grid view" className="btn btn-sm px-3 btn-outline-secondary" htmlFor="btnradio1">
					<svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1h3v3H1V1zM0 0h5v5H0V0zm1 8h3v3H1V8zM0 7h5v5H0V7zm11-6H8v3h3V1zM8 0H7v5h5V0H8zm0 8h3v3H8V8zM7 7h5v5H7V7z" fillRule="evenodd" fillOpacity="1" fill="#fff" stroke="none"></path>
					</svg>
				</label>

				<input //
					onClick={
						!props.listView.state
							? () => {
									props.listView.set(true);
							  }
							: null
					}
					type="radio"
					className="btn-check"
					name="btnradio"
					id="btnradio2"
					autoComplete="off"
					defaultChecked={listView ? true : false}
				></input>
				<label title="List view" className="btn btn-sm px-3 btn-outline-secondary" htmlFor="btnradio2">
					<svg className="svg" width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 0h14v1H0V0zm0 5.5h14v1H0v-1zM14 11H0v1h14v-1z" fillRule="evenodd" fillOpacity=".8" fill="#000" stroke="none"></path>
					</svg>
				</label>
			</div>
		</div>
	);
};
