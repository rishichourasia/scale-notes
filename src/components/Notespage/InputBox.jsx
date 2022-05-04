import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useNotes } from "../../context/note-context";
import { colourPalette, labelText } from "../../utilis/colourPallatte";
import { fetchNotes, addNotes, updateNotes } from "../../utilis/export-utils";

export const InputBox = () => {
	const { dispatchNotes, note, setNote, noteEdit, setNoteEdit } = useNotes();
	const [colorBox, setcolorBox] = useState(false);
	const [labelBox, setLabelBox] = useState(false);
	const { title, content, noteColor, label } = note;
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	const inputResetter = () => {
		setNote({
			title: "",
			content: "",
			noteColor: "",
			label: "Add label",
			pinned: false,
		});
	};

	const saveNoteHandle = () => {
		if (isAuth) {
			if (noteEdit) {
				updateNotes(dispatchNotes, note);
				inputResetter();
				setNoteEdit(false);
			} else {
				if (note.title !== "" && note.content !== "") {
					addNotes(dispatchNotes, note);
					fetchNotes(dispatchNotes);
					inputResetter();
				}
			}
		} else {
			navigate("/login");
		}
	};

	const colorHandler = (color) => {
		setNote({ ...note, noteColor: color });
		setcolorBox(false);
	};

	const labelHandler = (text) => {
		setNote({ ...note, label: text });
		setLabelBox(false);
	};

	const checkColor = noteColor === "";

	return (
		<div className="inputdiv">
			<div
				style={
					checkColor
						? { backgroundColor: "var(--main-bg-color)" }
						: { backgroundColor: noteColor }
				}
				className="inputbox"
			>
				<input
					type="text"
					className="input"
					placeholder="Title"
					value={title}
					onChange={(e) => {
						setNote({ ...note, title: e.target.value });
					}}
				/>
				<div className="input-below">
					<input
						type="text"
						className="input"
						placeholder="Take a note..."
						value={content}
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
							<span
								onClick={() =>
									colorBox ? setcolorBox(false) : setcolorBox(true)
								}
								className="note-cta"
							>
								<i className="far fa-palette"></i>
							</span>
							<span
								className="note-cta"
								onClick={() =>
									labelBox ? setLabelBox(false) : setLabelBox(true)
								}
							>
								<i className="far fa-tag"></i>
							</span>
							<label>{label}</label>
						</div>
					</div>
					<div
						style={colorBox ? { display: "flex" } : { display: "none" }}
						className="color-div"
					>
						{colourPalette.map((color) => (
							<div
								key={color}
								className="color-circle"
								style={{ backgroundColor: `${color}` }}
								onClick={() => colorHandler(color)}
							></div>
						))}
					</div>
					<div
						style={labelBox ? { display: "flex" } : { display: "none" }}
						className="label-div"
					>
						{labelText.map((text) => (
							<p
								key={text}
								className="notelabel-text"
								onClick={() => labelHandler(text)}
							>
								{text}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
