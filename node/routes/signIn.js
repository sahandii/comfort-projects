import fetch from "node-fetch";
import { CONFIG_SERVER, CONFIG_CLIENT_SERVER } from "../config.js";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

const vismaAPI = (url, body, headers = {}) => {
	var requestOptions = {
		method: body ? "POST" : "GET",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			...headers,
		},
		body,
		redirect: "follow",
	};

	console.log("Visma API", "https://connect.visma.com/" + url, requestOptions);

	return fetch("https://connect.visma.com/" + url, requestOptions)
		.then((response) => response.json())
		.catch((error) => false);
};

const fetchAccessToken = (code) => {
	const data = new URLSearchParams();
	data.append("grant_type", "authorization_code");
	data.append("redirect_uri", CONFIG_SERVER + "authorize");
	data.append("code", code);
	data.append("client_id", "isv_comfortoasisaps");
	data.append("client_secret", CONFIG_CLIENT_SERVER);

	return vismaAPI("connect/token", data);
};
//curl --request GET --url https://connect.visma.com/connect/userinfo --header 'authorization: Bearer [YOUR_ACCESS_TOKEN]'
const getUserInfo = (auth) =>
	vismaAPI("connect/userinfo", undefined, {
		authorization: `Bearer ${auth}`,
	});

export const signIn = async (req, res, next) => {
	console.log("WTf bro", req.body);
	console.log("Fetching code –", req.body.code);
	const data = await fetchAccessToken(req.body.code);
	console.log("Access token (JWT) recieved –", data);

	const userInfo = await getUserInfo(data.access_token);
	console.log("Userinfo", userInfo);

	req.session.accessToken = data.access_token;

	const info = {
		mail: userInfo.email,
		refreshToken: data.refresh_token,
	};
	// await prisma.user.upsert({
	// 	where: {
	// 		mail: userInfo.email,
	// 	},
	// 	update: info,
	// 	create: info,
	// });

	// await prisma.user.update({
	// 	where: {
	// 		mail: userInfo.email,
	// 	},
	// 	data: {
	// 		refreshToken: data.refresh_token,
	// 	},
	// });
	// Return to client
	res.send({
		error: false,
	});
};
