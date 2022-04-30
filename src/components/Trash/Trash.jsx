import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNotes } from "../../context/note-context";
import { Sidebar } from "../export";
import { NoteCard } from "../Notespage/NoteCard";

export const Trash = () => {
	const { notesState } = useNotes();
	let location = useLocation();

	useEffect(() => {}, [notesState]);

	return (
		<div className="main">
			<Sidebar />
			<div className="notes-page">
				<div className="notes-display">
					{notesState.trash.map((item) => (
						<NoteCard note={item} pathname={location.pathname} />
					))}
				</div>
			</div>
		</div>
	);
};
