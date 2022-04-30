import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNotes } from "../../context/note-context";
import { fetchNotes } from "../../utilis/export-utils";
import { Sidebar } from "../export";
import { InputBox } from "./InputBox";
import { NoteCard } from "./NoteCard";
import "./notespage.css";

export const NotesPage = () => {
	const { notesState, dispatchNotes } = useNotes();
	const location = useLocation();

	useEffect(() => {
		fetchNotes(dispatchNotes);
	}, [notesState]);

	return (
		<div className="main">
			<Sidebar />
			<div className="notes-page">
				<InputBox />
				<div className="notes-display">
					{notesState.notes.map((item) => (
						<>
							<NoteCard note={item} pathname={location.pathname} />
						</>
					))}
				</div>
			</div>
		</div>
	);
};
