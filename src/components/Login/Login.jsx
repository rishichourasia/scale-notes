import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { handleLogin } from "../../utilis/login-signup";
import "./login.css";

export const Login = () => {
	const navigate = useNavigate();
	const { isAuth, setAuth } = useAuth();
	const [input, setInput] = useState({ email: "", password: "" });

	return (
		<div className="login-container">
			<p className="title">Login</p>
			<div className="input-div">
				<label>Email</label>
				<input
					className="input"
					type="text"
					autoComplete="nope"
					value={input.email}
					placeholder="Enter Email"
					onChange={(e) => setInput({ ...input, email: e.target.value })}
				/>
			</div>
			<div className="input-div">
				<label>Password</label>
				<input
					className="input"
					type="password"
					placeholder="Enter Password"
					value={input.password}
					onChange={(e) => setInput({ ...input, password: e.target.value })}
				/>
			</div>
			<label className="label">
				<input type="checkbox" name="label" id="" /> Remember me
			</label>
			<button
				className="btn btn-primary"
				onClick={() => {
					setInput({
						email: "testuser@gmail.com",
						password: "test",
					});
					handleLogin(navigate, setAuth, isAuth);
				}}
			>
				Login using test credentials
			</button>
			<div className="signup-cta">
				<p>
					Don't have an account?
					<NavLink to="/signup">
						<span>Signup</span>
					</NavLink>
				</p>
			</div>
		</div>
	);
};
