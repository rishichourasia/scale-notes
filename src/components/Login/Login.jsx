import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./login.css";

export const Login = () => {
	const { setToken } = useAuth();
	const navigate = useNavigate();

	const handleLogin = async () => {
		try {
			const response = await axios.post("/api/auth/login", {
				email: "adarshbalika@gmail.com",
				password: "adarsh",
			});
			localStorage.setItem("token", response.data.encodedToken);
			setToken(response.data.encodedToken);
			console.log(response.data.encodedToken ? "Logged in" : "Error");
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="login-container">
			<p className="title">Login</p>
			<div className="input-div">
				<label>Email</label>
				<input
					className="input"
					type="text"
					autoComplete="nope"
					placeholder="Enter Email"
				/>
			</div>
			<div className="input-div">
				<label>Password</label>
				<input className="input" type="password" placeholder="Enter Password" />
			</div>
			<label className="label">
				<input type="checkbox" name="label" id="" /> Remember me
			</label>
			<button
				className="btn btn-primary"
				onClick={() => {
					handleLogin();
				}}
			>
				Login
			</button>
			<div className="signup-cta">
				<p>
					Don't have an account?
					<span>Signup</span>
				</p>
			</div>
		</div>
	);
};
