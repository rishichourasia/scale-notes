import axios from "axios";

const handleLogin = async (navigate) => {
	try {
		const response = await axios.post("/api/auth/login", {
			email: "adarshbalika@gmail.com",
			password: "adarsh",
		});
		localStorage.setItem("token", JSON.stringify(response.data.encodedToken));
		console.log(response.data.encodedToken ? "Logged in" : "Error");
		navigate("/");
	} catch (err) {
		console.log(err);
	}
};

export { handleLogin };
