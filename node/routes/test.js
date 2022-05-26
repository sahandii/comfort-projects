export const test = async (req, res, next) => {
	console.log("Hello", req.session);
	res.send({
		error: !req.session.accessToken
	});
};
