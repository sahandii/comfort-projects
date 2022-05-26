import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import { authorizeRoute, test, signIn } from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

const oneDay = 1000 * 60 * 60 * 24;
app.use(
	session({
		secret: "keyboard cat",
		saveUninitialized: true,
		cookie: { maxAge: oneDay, secure: false },
		resave: false,
	}),
);

// Middlewares
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: true,
	}),
);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/authorize", authorizeRoute);
app.use("/signIn", signIn);
app.use("/test", test);

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});
