export const test = async (req, res, next) => {
	console.log("Hello", req.session.accessToken);
	res.send({});
};
