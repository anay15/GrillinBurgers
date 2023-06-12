import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import { urlencoded } from "express";
import userRoute from "./routes/user.js";
import orderRoute from "./routes/order.js"
import passport from "passport";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
const app = express();
dotenv.config({
    path: "./config/config.env",
});

//Using MiddleWares
//creating sessions for user
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_PACKET,
}))
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({
    extended: true,
}));

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());


connectPassport();

//importing Routes 

app.use("/api/v1", userRoute);

app.use("/api/v1", orderRoute);
//using error middleware
app.use(errorMiddleware)
export default app;