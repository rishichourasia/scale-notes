import React from "react";
import { NavLink } from "react-router-dom";
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

	const { notesState, dispatchNotes } = useNotes();

	// const filterHandle =  (item) => {
	// return notesState.notes
	// };

	return (
		<div className="sidebar">
			<NavLink style={getActiveStyle} to="/">
				<div className="sidebar-label">
					<span className="label-icon">
						<i className="far fa-file-check fa-size"></i>
					</span>
					<p className="label-text">Tasks</p>
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
				<p className="filter-text">Filters</p>
				<div className="filter-box">
					{labelText.map((item) => (
						<>
							<label key={item}>
								<input
									onChange={() => dispatchNotes({ type: item, payload: item })}
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
		</div>
	);
};

export { Sidebar };
