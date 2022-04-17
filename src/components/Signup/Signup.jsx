import React from "react";
import "./signup.css";

export const Signup = () => {
	return (
		<div className="login-container">
			<p className="title">Signup</p>
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
				<input type="checkbox" name="label" id="" /> Accept all terms and
				coundition
			</label>
			<button className="btn btn-primary">Create new account</button>
			<div className="signup-cta">
				<p>
					Already have an account?
					<span>Login</span>
				</p>
			</div>
		</div>
	);
};
