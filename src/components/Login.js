import React from "react";
import "./css/Login.css";
import { accessUrl } from "./spotify";

function Login() {
	return (
		<div className="login">
			<img
				src="https://res.cloudinary.com/ddet8to42/image/upload/v1630863860/spotify-clone/spotify2019-830x350_nvugwe.jpg"
				alt=""
			/>
			<a href={accessUrl}>LOGIN TO SPOTIFY</a>
		</div>
	);
}

export default Login;
