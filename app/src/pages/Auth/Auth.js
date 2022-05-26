import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CONFIG_API_SERVER } from "../../config";

export const Auth = () => {
	let { token } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		var requestOptions = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"code": token
			}),
			credentials: 'include',
			redirect: 'follow'
		};

		fetch(CONFIG_API_SERVER + "/signIn", requestOptions)
			.then(response => response.json())
			.catch(_ => false)
			.then(d => {
				console.log("Hmm", d);
				if(d &&! d.error)
				{
					navigate("/client");
				}else{
					navigate("/");
				}
			});
	}, [token]);

	return null;
};
