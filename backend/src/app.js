import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";


const MONGO_URL = process.env.MONGO_DB_URL;
const app = express();
const server = createServer(app);  // main server
const io = connectToSocket(server); // app and socket connected to main server


app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));
app.use("/api/v1/users", userRoutes);


app.set("port", (process.env.PORT || 8000));


const start = async() => {

	const connectionDb = await mongoose.connect(MONGO_URL);
	console.log(`MONGO CONNECTED TO USER ${connectionDb.connection.host}`);


	server.listen(app.get("port"), () => {
		console.log("LISTENING");
	});
}


start();
