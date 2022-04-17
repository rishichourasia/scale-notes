import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
	const getActiveStyle = ({ isActive }) => ({
		borderRadius: isActive ? "0 2em 2em 0" : "",
		backgroundColor: isActive ? "var(--primary-color)" : "",
		color: isActive ? "white" : "black",
	});

	return (
		<div className="sidebar">
			<NavLink style={getActiveStyle} to="/">
				<div className="sidebar-label">
					<span className="label-icon">
						<i className="far fa-file-alt fa-size"></i>
					</span>
					<p className="label-text">Notes</p>
				</div>
			</NavLink>
			<NavLink style={getActiveStyle} to="/archive">
				<div className="sidebar-label">
					<span className="label-icon">
						<i className="far fa-inbox fa-size"></i>
					</span>
					<p className="label-text">Archive</p>
				</div>
			</NavLink>
			<NavLink style={getActiveStyle} to="/trash">
				<div className="sidebar-label">
					<span className="label-icon">
						<i className="far fa-trash fa-size"></i>
					</span>
					<p className="label-text">Trash</p>
				</div>
			</NavLink>
			<div className="sidebar-label">
				<span className="label-icon">
					<i className="far fa-tag fa-size"></i>
				</span>
				<p className="label-text">label</p>
			</div>
		</div>
	);
};

export { Sidebar };
