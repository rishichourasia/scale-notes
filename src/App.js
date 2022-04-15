import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<>
			<Navbar />
			<div className="main">
				<Sidebar />
			</div>
		</>
	);
}

export default App;
