import axios from "axios";

const addToArchive = async (dispatchNotes, note) => {
	const authToken = localStorage.getItem("token");
	const Headers = { authorization: authToken };

	const noteObj = { note: note };

	try {
		const response = await axios.post(
			`/api/notes/archives/${note._id}`,
			noteObj,
			{
				headers: Headers,
			}
		);
		if (response.status >= 200) {
			dispatchNotes({ type: "FETCH_NOTES", payload: response.data.notes });
			dispatchNotes({
				type: "ADD_TO_ARCHIVE",
				payload: response.data.archives,
			});
		}
	} catch (error) {
		console.log(error.message);
	}
};

const restoreArchive = async (dispatchNotes, note) => {
	const authToken = localStorage.getItem("token");
	const Headers = { authorization: authToken };

	try {
		const response = await axios.post(
			`/api/archives/restore/${note._id}`,
			{},
			{ headers: Headers }
		);
		if (response.status >= 200) {
			dispatchNotes({ type: "FETCH_NOTES", payload: response.data.notes });
			dispatchNotes({
				type: "ADD_TO_ARCHIVE",
				payload: response.data.archives,
			});
		}
	} catch (error) {
		console.log(error.message);
	}
};

const deleteArchive = async (dispatchNotes, note) => {
	const authToken = localStorage.getItem("token");
	const Headers = { authorization: authToken };

	try {
		const response = await axios.delete(`/api/archives/delete/${note._id}`, {
			headers: Headers,
		});
		if (response.status >= 200) {
			dispatchNotes({
				type: "ADD_TO_ARCHIVE",
				payload: response.data.archives,
			});
		}
	} catch (error) {
		console.log(error.message);
	}
};

export { addToArchive, restoreArchive, deleteArchive };
