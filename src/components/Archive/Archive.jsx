import React from "react";
import { useLocation } from "react-router-dom";
import { useNotes } from "../../context/note-context";
import { Sidebar } from "../export";
import { NoteCard } from "../Notespage/NoteCard";

export const Archive = () => {
	const { notesState } = useNotes();

	let location = useLocation();

	return (
		<div className="main">
			<Sidebar />
			<div className="notes-page">
				<div className="notes-display">
					{notesState.archives.map((item) => (
						<NoteCard note={item} pathname={location.pathname} />
					))}
				</div>
			</div>
		</div>
	);
};
