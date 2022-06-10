const filterTask = (state, label) => {
	if (label === undefined || label === "Add Status") {
		return state;
	} else {
		return state.filter((item) => item.label === label);
	}
};

export { filterTask };
