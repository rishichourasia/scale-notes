import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { handleLogin } from "../../utilis/login-signup";
import "./login.css";

export const Login = () => {
	const navigate = useNavigate();
	const { isAuth, setAuth } = useAuth();

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
					handleLogin(navigate, setAuth, isAuth);
				}}
			>
				Login using test credentials
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
