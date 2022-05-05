import React from "react";
import { useLocation } from "react-router-dom";
import { useNotes } from "../../context/note-context";
import { Sidebar } from "../export";
import { NoteCard } from "../Notespage/NoteCard";

export const Trash = () => {
	const { notesState } = useNotes();
	let location = useLocation();
	const noteLen = notesState.trash.length > 0;

	return (
		<div className="main">
			<Sidebar />
			<div className="notes-page">
				<div
					className="notes-display"
					style={!noteLen ? { justifyContent: "center" } : null}
				>
					{noteLen ? (
						notesState.trash.map((item) => (
							<NoteCard note={item} pathname={location.pathname} />
						))
					) : (
						<div className="empty-div">
							<span>
								<i className="far fa-trash empty-icon"></i>
								<p>Trash Task appear here</p>
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
