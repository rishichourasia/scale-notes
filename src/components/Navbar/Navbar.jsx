import React from "react";
import "./navbar.css";

const Navbar = () => {
	return (
		<>
			<header className="nav fixed">
				<div className="menu-logo">
					<div className="menu-btn">
						<img
							className="logo-svg"
							src="/assets/logo/logo simple dark.svg"
							alt="logo-svg"
						/>
					</div>
				</div>
				<div className="nav-btn">
					<button className="btn btn-primary">Login</button>

					<button className="btn btn-primary-outlined">Signup</button>
				</div>
			</header>
		</>
	);
};

export default Navbar;
