import React from "react";
import { useNotes } from "../../context/note-context";
import { fetchNotes, addNotes } from "../../utilis/export-utils";

export const InputBox = () => {
	const { dispatchNotes, note, setNote } = useNotes();

	const saveNoteHandle = () => {
		addNotes(dispatchNotes, note);
		fetchNotes(dispatchNotes);
		setNote({ title: "", content: "" });
	};

	return (
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
								<i className="far fa-palette"></i>
							</span>
							<span>
								<i className="far fa-tag"></i>
							</span>
							<label>label</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
