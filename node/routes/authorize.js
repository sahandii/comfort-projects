export const authorizeRoute = async (req, res, next) => {
	res.send(`<script>window.location = 'http://localhost:3000/auth/${req.body.code}'</script>`);
};
