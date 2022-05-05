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

	const pinnedNotes = notesState.notes.filter((item) => item.pinned !== false);
	const allNotes = notesState.notes.filter((item) => item.pinned === false);

	const pinnedLen = pinnedNotes.length > 0;
	const noteLen = notesState.notes.length > 0;

	return (
		<div className="main">
			<Sidebar />
			<div className="notes-page">
				<InputBox />
				<div
					className="notes-display"
					style={!noteLen ? { justifyContent: "center" } : null}
				>
					{noteLen ? (
						<>
							<div
								className="note-type"
								style={pinnedLen ? { display: "flex" } : { display: "none" }}
							>
								<p>Pinned Notes</p>
								<div className="note-box">
									{pinnedNotes.map((item) => (
										<>
											<NoteCard note={item} pathname={location.pathname} />
										</>
									))}
								</div>
							</div>
							<div className="note-type">
								<p>Other Notes</p>
								<div className="note-box">
									{allNotes.map((item) => (
										<>
											<NoteCard note={item} pathname={location.pathname} />
										</>
									))}
								</div>
							</div>
						</>
					) : (
						<div className="empty-div">
							<span>
								<i className="far fa-file-alt empty-icon"></i>
								<p>Notes you add appear here</p>
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
