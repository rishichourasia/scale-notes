import { createContext, useContext, useReducer, useState } from "react";
import { NoteReducer } from "../reducer/note-reducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
	const [note, setNote] = useState({
		title: "",
		content: "",
		noteColor: "",
		label: "Add Status",
		pinned: false,
	});
	const [noteEdit, setNoteEdit] = useState(false);

	const [notesState, dispatchNotes] = useReducer(NoteReducer, {
		notes: [],
		archives: [],
		trash: [],
	});

	return (
		<NotesContext.Provider
			value={{
				notesState,
				dispatchNotes,
				note,
				setNote,
				noteEdit,
				setNoteEdit,
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
