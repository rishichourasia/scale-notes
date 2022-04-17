import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<>
			<header className="nav fixed">
				<div className="menu-logo">
					<NavLink to="/">
						<div className="menu-btn">
							<img
								className="logo-svg"
								src="/assets/logo/logo simple dark.svg"
								alt="logo-svg"
							/>
						</div>
					</NavLink>
				</div>
				<div className="nav-btn">
					<NavLink to="/login">
						<button className="btn btn-primary">Login</button>
					</NavLink>
					<NavLink to="/signup">
						<button className="btn btn-primary-outlined">Signup</button>
					</NavLink>
				</div>
			</header>
		</>
	);
};
