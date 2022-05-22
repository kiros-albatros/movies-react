import React from "react";

const Search = ({ submitHandler }) => {
	return (
		<form onSubmit={submitHandler}>
			<input className="searchInput" type="text" placeholder="search" />
			<input type="submit" value="Go!" />
		</form>
	);
};

export default Search;
