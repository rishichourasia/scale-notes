import { Route, Routes } from "react-router-dom";
import {
	Archive,
	Login,
	Navbar,
	NotesPage,
	Signup,
	Trash,
} from "./components/export";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<NotesPage />} />
				<Route path="/archive" element={<Archive />} />
				<Route path="/trash" element={<Trash />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</>
	);
}

export default App;
