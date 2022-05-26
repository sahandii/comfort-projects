
import { CONFIG_SERVER } from "../../config";

const endpoint = CONFIG_SERVER + "/authorize";
function WelcomePage() {

	return (
		<>
			<div className="d-flex align-items-center vw-100 vh-100 black-bg">
				<div className="container">
					<div className="row p-4">
						<div className="col-12 col-lg-6">
							<div className="col-12">
								{/* <StreezyLogo className="d-inline-flex" style={{ color: "white" }} width="100%" height="100%" draggable="false" /> */}
								<h1 className="limegreen text-uppercase">Comfort Projects</h1>
								<h6 className="white">
									<span className="text-uppercase">
										<a className="white" href="https://comfortoasis.studio/">
											By Comfort Oasis
										</a>
									</span>
								</h6>
							</div>
							<h5 className="mt-4 fw-light white lh-base">Creative studio based in Copenhagen, working with clients in both cultural and commercial fields.</h5>
							<a href={`https://connect.visma.com/connect/authorize?client_id=isv_comfortoasisaps&response_mode=form_post&response_type=code&scope=openid+email+profile+dineropublicapi:read+dineropublicapi:write+offline_access&redirect_uri=${endpoint}&ui_locales=da-DK`} className="mt-4 btn btn-lg btn-primary p-3 px-4">
								Sign in
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WelcomePage;
