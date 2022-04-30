import axios from "axios";

const deleteNotes = async (dispatchNotes, note) => {
	const authToken = localStorage.getItem("token");
	const Headers = { authorization: authToken };

	try {
		const response = await axios.delete(`/api/notes/${note._id}`, {
			headers: Headers,
		});
		if (response.status === 200) {
			dispatchNotes({ type: "FETCH_NOTES", payload: response.data.notes });
		}
	} catch (error) {
		console.log(error.message);
	}
};

export { deleteNotes };
