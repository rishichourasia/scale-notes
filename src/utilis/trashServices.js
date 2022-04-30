const trashNoteHandler = (dispatchNotes, note, deleteNotes) => {
	dispatchNotes({ type: "ADD_TO_TRASH", payload: note });
	deleteNotes(dispatchNotes, note);
};

const restoreTrashHandler = (dispatchNotes, note, addNotes) => {
	addNotes(dispatchNotes, note);
	dispatchNotes({ type: "DELETE_TRASH", payload: note._id });
};

export { trashNoteHandler, restoreTrashHandler };
