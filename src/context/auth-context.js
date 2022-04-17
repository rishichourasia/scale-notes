import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState("");
	const [isAuth, setAuth] = useState(false);

	return (
		<AuthContext.Provider value={{ token, setToken, isAuth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
