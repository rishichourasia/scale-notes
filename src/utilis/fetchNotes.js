import axios from "axios";

const fetchNotes = async (dispatchNotes) => {
	const authToken = localStorage.getItem("token");
	const Headers = { authorization: authToken };

	try {
		const response = await axios.get("/api/notes", { headers: Headers });
		if (response.status === 200) {
			dispatchNotes({ type: "ADD_NOTES", payload: response.data.notes });
		}
	} catch (error) {
		console.log(error.message);
	}
};

export { fetchNotes };
