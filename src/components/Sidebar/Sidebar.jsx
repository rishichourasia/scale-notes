import React from "react";
import "./sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar-label">
				<span className="label-icon">
					<i class="far fa-file-alt fa-size"></i>
				</span>
				<p className="label-text">Notes</p>
			</div>
			<div className="sidebar-label">
				<span className="label-icon">
					<i class="far fa-inbox fa-size"></i>
				</span>
				<p className="label-text">Archive</p>
			</div>
			<div className="sidebar-label">
				<span className="label-icon">
					<i class="far fa-trash fa-size"></i>
				</span>
				<p className="label-text">Trash</p>
			</div>
			<div className="sidebar-label">
				<span className="label-icon">
					<i class="far fa-tag fa-size"></i>
				</span>
				<p className="label-text">label</p>
			</div>
		</div>
	);
};

export default Sidebar;
