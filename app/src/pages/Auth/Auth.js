import { useState } from "react";
// Hooks
import { useParams } from "react-router-dom";
import { useFetch } from "usehooks-ts";

export const Auth = (props) => {
	let { token } = useParams();

	// console.log(token);
	// const { data, error } = useFetch("http://localhost:3001/signIn", {
	// 	body: JSON.stringify({
	// 		code: token,
	// 	}),
	// 	header: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	method: "POST",
	// });
	return (
		<>
			<div>Auth</div>
		</>
	);
};
