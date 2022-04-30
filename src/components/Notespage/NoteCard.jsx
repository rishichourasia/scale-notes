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
	const { _id, title, content } = note;
	const { dispatchNotes } = useNotes();

	return (
		<div key={_id} className="notecard">
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
							<span className="note-cta">
								<i className="far fa-pen"></i>
							</span>
							<span
								className="note-cta"
								onClick={() => addToArchive(dispatchNotes, note)}
							>
								<i className="far fa-inbox-in"></i>
							</span>
							<span
								className="note-cta"
								onClick={() =>
									trashNoteHandler(dispatchNotes, note, deleteNotes)
								}
							>
								<i className="far fa-trash-alt"></i>
							</span>
						</>
					) : pathname === "/archive" ? (
						<>
							<span
								className="note-cta"
								onClick={() => restoreArchive(dispatchNotes, note)}
							>
								<i className="far fa-inbox-out"></i>
							</span>
							<span
								className="note-cta"
								onClick={() => deleteArchive(dispatchNotes, note)}
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
							>
								<i className="far fa-trash-restore"></i>
							</span>
							<span
								className="note-cta"
								onClick={() =>
									dispatchNotes({ type: "DELETE_TRASH", payload: _id })
								}
							>
								<i className="far fa-trash-alt"></i>
							</span>
						</>
					)}
				</div>
				<div className="label-box">
					<span>label</span>
				</div>
			</div>
		</div>
	);
};
