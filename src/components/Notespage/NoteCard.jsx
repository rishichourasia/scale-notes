import React from "react";
import { useNotes } from "../../context/note-context";
import {
	addNotes,
	addToArchive,
	deleteArchive,
	restoreArchive,
	deleteNotes,
	restoreTrashHandler,
	trashNoteHandler,
} from "../../utilis/export-utils";

export const NoteCard = ({ note, pathname }) => {
	const { _id, title, content, noteColor, label } = note;
	const { dispatchNotes, setNote, setNoteEdit } = useNotes();

	const editnoteHandler = () => {
		setNoteEdit(true);
		setNote({
			title: title,
			content: content,
			noteColor: noteColor,
			label: label,
			_id: _id,
		});
	};

	const checkLabel = label === "Add label";

	return (
		<div
			key={note._id}
			style={{ backgroundColor: noteColor }}
			className="notecard"
		>
			{pathname !== "/trash" && pathname !== "/archive" ? (
				<div className="pin-title">
					<h3 className="note-title">{title}</h3>
					<span className="note-cta">
						<i className="far fa-thumbtack"></i>
					</span>
				</div>
			) : (
				<h3 className="note-title">{title}</h3>
			)}

			<p className="note-content">{content}</p>
			<div className="notecard-cta">
				<div className="cta-box">
					{pathname !== "/trash" && pathname !== "/archive" ? (
						<>
							<span
								className="note-cta"
								title="Edit note"
								onClick={() => editnoteHandler()}
							>
								<i className="far fa-pen"></i>
							</span>
							<span
								className="note-cta"
								onClick={() => addToArchive(dispatchNotes, note)}
								title="Add to archive"
							>
								<i className="far fa-inbox-in"></i>
							</span>
							<span
								className="note-cta"
								onClick={() =>
									trashNoteHandler(dispatchNotes, note, deleteNotes)
								}
								title="Move to trash"
							>
								<i className="far fa-trash-alt"></i>
							</span>
						</>
					) : pathname === "/archive" ? (
						<>
							<span
								className="note-cta"
								onClick={() => restoreArchive(dispatchNotes, note)}
								title="Restore"
							>
								<i className="far fa-inbox-out"></i>
							</span>
							<span
								className="note-cta"
								onClick={() => deleteArchive(dispatchNotes, note)}
								title="Delete from archive"
							>
								<i className="far fa-trash-alt"></i>
							</span>
						</>
					) : (
						<>
							<span
								className="note-cta"
								onClick={() =>
									restoreTrashHandler(dispatchNotes, note, addNotes)
								}
								title="Restore"
							>
								<i className="far fa-trash-restore"></i>
							</span>
							<span
								className="note-cta"
								onClick={() =>
									dispatchNotes({ type: "DELETE_TRASH", payload: _id })
								}
								title="Delete from trash"
							>
								<i className="far fa-trash-alt"></i>
							</span>
						</>
					)}
				</div>
				<div className="label-box">
					<span
						style={checkLabel ? { display: "none" } : { display: "block" }}
						className="note-label"
					>
						{label}
					</span>
				</div>
			</div>
		</div>
	);
};
