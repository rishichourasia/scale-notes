import React from "react";
import { useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { useNotes } from "../../context/note-context";
import { Sidebar } from "../export";
import "./notespage.css";

export const NotesPage = () => {
	const { notesState, dispatchNotes, note, setNote } = useNotes();
	const { token, setToken } = useAuth();

	const saveNoteHandle = () => {
		dispatchNotes({
			type: "ADD_NOTE",
			payload: note,
		});

		setNote({ title: "", content: "" });
	};

	useEffect(() => {
		const localToken = localStorage.getItem("token");
		setToken(localToken);
	}, []);
	console.log(token);
	return (
		<div className="main">
			<Sidebar />
			<div className="notes-page">
				<div className="inputdiv">
					<div className="inputbox">
						<input
							type="text"
							className="input"
							placeholder="Title"
							value={note.title}
							onChange={(e) => {
								setNote({ ...note, title: e.target.value });
							}}
						/>
						<div className="input-below">
							<input
								type="text"
								className="input"
								placeholder="Take a note..."
								value={note.content}
								onChange={(e) => {
									setNote({ ...note, content: e.target.value });
								}}
							/>
							<div className="input-cta">
								<button
									className="btn btn-primary save-note"
									onClick={() => saveNoteHandle()}
								>
									Save Note
								</button>
								<div className="selective-cta">
									<span>
										<i className="fas fa-palette"></i>
									</span>
									<span>
										<i className="fas fa-tag"></i>
									</span>
									<label>label</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="notes-display">
					{notesState.notes.map((item) => (
						<>
							<div className="notecard">
								<p>{item.title}</p>
								<p>{item.content}</p>
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};
