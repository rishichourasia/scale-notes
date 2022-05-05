import React from "react";
import { useLocation } from "react-router-dom";
import { useNotes } from "../../context/note-context";
import { Sidebar } from "../export";
import { NoteCard } from "../Notespage/NoteCard";

export const Archive = () => {
	const { notesState } = useNotes();
	const noteLen = notesState.archives.length > 0;

	let location = useLocation();

	return (
		<div className="main">
			<Sidebar />
			<div className="notes-page">
				<div
					className="notes-display"
					style={!noteLen ? { justifyContent: "center" } : null}
				>
					{noteLen ? (
						notesState.archives.map((item) => (
							<NoteCard note={item} pathname={location.pathname} />
						))
					) : (
						<div className="empty-div">
							<span>
								<i className="far fa-inbox empty-icon"></i>
								<p>Archived notes appear here</p>
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
