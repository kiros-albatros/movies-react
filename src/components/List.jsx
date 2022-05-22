import React from "react";
import Film from "./Film";
import styled from "styled-components";

const Ul = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	list-style: none;
	padding: none;
	margin: none;
	max-width: 90%;
	margin: 20px auto;
`;

const List = ({ filmsList }) => {
	return (
		<Ul>
			{filmsList.map((film) => (
				<Film key={film.id} filmInfo={film} />
			))}
		</Ul>
	);
};

export default List;
