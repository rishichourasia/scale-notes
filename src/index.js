import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/auth-context";
import { NotesProvider } from "./context/note-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<AuthProvider>
			<NotesProvider>
				<App />
			</NotesProvider>
		</AuthProvider>
	</Router>
);
