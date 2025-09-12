import httpStatus from "http-status";
import { User } from "../models/user.model.js";
import bcrypt, { hash } from "bcrypt";
import crypto from "crypto";

const login = async (req, res) =>{
	const { name, username } = req.body;
	if(!name || !username){
		return res.status(400).json({ message: "Provide proper fields" });
	}

	try{
		const user = await User.find({ username });
		if(!user){
			return res.status(httpStatus.NOY_FOUND).json({ message: "User does not exist"});
		}

		if(bcrypt.compare(password, user.password)){
			let token = crypto.randomBytes(20).toString("hex");
			user.token = token;
			return res.status(httpStatus.OK).json({token: token})
		}


	}
	catch (e){
		res.status({ message: `Something went wrong ${e}`});
	}
}



const register = async ( req, res) => {
	const { name, username, password } = req.body;

	try{
		const existingUser = await User.findOne({ username });
		if(!existingUser){
			return res.status(httpStatus.FOUND).json({ message: "User already exist"});
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			name: name,
			username: username,
			password: hashedPassword
		});

		return res.status(httpStatus.CREATED).json(message: "User registered");

	}catch(e){
		res.status({ message: `Something went wrong ${e}`});
	}
}

export { login, register };