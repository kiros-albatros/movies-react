import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import List from "./components/List";
import Pagination from "./components/Pagination";

function App() {
	const [search, setSearch] = useState("batman");
	const [page, setPage] = useState(1);
	const [hasNext, setHasNext] = useState(false);
	const list = "top_rated_250";

	const options = {
		method: "GET",
		url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${search}`,
		params: {
			info: "mini_info",
			limit: "12",
			page: page,
			titleType: "movie",
			startYear: "2005",
			endYear: "2022",
			//		list: list,
		},
		headers: {
			"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
			"X-RapidAPI-Key":
				"4bd375fd83msh392ff3146ae1213p18c6aajsn8deecb5237be",
		},
	};

	const [filmsList, setFilmsList] = useState(null);

	useEffect(() => {
		axios
			.request(options)
			.then(function (response) {
				if (response.data.results.length === 0) {
					setFilmsList(false);
				} else if (
					response.data.results.length > 0 &&
					hasNext !== response.data.next
				) {
					setFilmsList(response.data.results);
					setHasNext(response.data.next);
					console.log("data: " + response.data.next);
					console.log("hasNext: " + hasNext);
				} else {
					setHasNext(false);
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	}, [search, page]);

	const searchInput = document.querySelector(".searchInput");

	const submitHandler = (event) => {
		event.preventDefault();
		if (searchInput.value.length > 0) {
			setSearch(searchInput.value);
		}
		setPage(1);
	};

	const pageHandlerNext = (pageNumber) => {
		if (hasNext) {
			setPage(pageNumber);
		}
	};

	const pageHandlerPrev = (pageNumber) => {
		if (page > 1) {
			setPage(pageNumber);
		}
	};

	return (
		<div className="App">
			<header className="App-header">movies-app</header>
			<Search submitHandler={submitHandler} />
			{filmsList ? (
				<>
					<List filmsList={filmsList} />
					<Pagination
						hasNext={hasNext}
						page={page}
						pageHandlerNext={pageHandlerNext}
						pageHandlerPrev={pageHandlerPrev}
					/>
				</>
			) : (
				"nothing found"
			)}
		</div>
	);
}

export default App;
