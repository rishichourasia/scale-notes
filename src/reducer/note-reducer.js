const NoteReducer = (state, action) => {
	switch (action.type) {
		case "FETCH_NOTES":
			return { ...state, notes: action.payload };
		case "ADD_NOTE":
			return { ...state, notes: [...state.notes, action.payload] };
		case "ADD_TO_ARCHIVE":
			return { ...state, archives: action.payload };
		case "ADD_TO_TRASH":
			return { ...state, trash: [...state.trash, action.payload] };
		case "DELETE_TRASH":
			return {
				...state,
				trash: state.trash.filter((item) => item._id !== action.payload),
			};
		default:
			return state;
	}
};

export { NoteReducer };
