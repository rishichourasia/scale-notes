import axios from "axios";

const addNotes = async (dispatchNotes, note) => {
	const authToken = localStorage.getItem("token");
	const Headers = { authorization: authToken };

	const noteObj = { note: note };

	try {
		const response = await axios.post("/api/notes", noteObj, {
			headers: Headers,
		});
		dispatchNotes({ type: "FETCH_NOTES", payload: response.data.notes });
	} catch (error) {
		console.log(error.message);
	}
};

const updateNotes = async (dispatchNotes, note) => {
	const authToken = localStorage.getItem("token");
	const Headers = { authorization: authToken };
	console.log(note._id);
	const noteObj = { note: note };

	try {
		const response = await axios.post(`/api/notes/${note._id}`, noteObj, {
			headers: Headers,
		});
		console.log(response.data.notes);
		dispatchNotes({ type: "FETCH_NOTES", payload: response.data.notes });
	} catch (error) {
		console.log(error.message);
	}
};

export { addNotes, updateNotes };
