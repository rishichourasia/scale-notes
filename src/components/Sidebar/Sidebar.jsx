import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useNotes } from "../../context/note-context";
import { labelText } from "../../utilis/colourPallatte";
import { fetchNotes } from "../../utilis/fetchNotes";
import "./sidebar.css";

const Sidebar = () => {
	const getActiveStyle = ({ isActive }) => ({
		borderRadius: isActive ? "0 2em 2em 0" : "",
		backgroundColor: isActive ? "var(--primary-color)" : "",
		color: isActive ? "white" : "black",
	});

	const { dispatchNotes } = useNotes();
	const { isAuth } = useAuth();
	const [checkRadio, setRadio] = useState(true);

	return (
		<div className="sidebar">
			<NavLink style={getActiveStyle} to="/">
				<div className="sidebar-label">
					<span className="label-icon">
						<i className="far fa-file-check fa-size"></i>
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
			<div className="filter-div">
				<div className="filter-text-div">
					<p className="filter-text">Filters</p>
					<p
						className="reset"
						onClick={() => {
							setRadio(true);
							dispatchNotes({ type: "ALL_TASKS" });
						}}
					>
						Reset
					</p>
				</div>

				<div className="filter-box">
					<label>
						<input
							checked={checkRadio}
							onChange={() => {
								setRadio(checkRadio ? false : true);
								dispatchNotes({ type: "ALL_TASKS" });
							}}
							className="filter-input"
							type="radio"
							name="filter"
						/>
						All Tasks
					</label>
					{labelText.map((item) => (
						<>
							<label key={item}>
								<input
									key={item}
									onChange={() => {
										setRadio(false);
										dispatchNotes({ type: item, payload: item });
									}}
									className="filter-input"
									type="radio"
									name="filter"
								/>
								{item}
							</label>
						</>
					))}
				</div>
			</div>

			<div className="side-profile">
				{isAuth ? (
					<>
						<div className="first-div">
							<i class="far fa-user-circle side-icon"></i>
							<p className="profile-name">Test User</p>
						</div>
						<div>
							<span className="note-cta-sidebar">
								<i class="far fa-sign-out side-icon"></i>
							</span>
						</div>
					</>
				) : (
					<>
						<div className="first-div">
							<i class="far fa-exclamation-circle side-icon"></i>
							<p className="profile-name">Login First</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export { Sidebar };
