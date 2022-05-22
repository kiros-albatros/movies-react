import React from "react";
import styled from "styled-components";
import noPoster from "../assets/no-poster-available.jpg";

const Li = styled.li`
	flex-basis: 30%;
	margin-bottom: 30px;
	outline: 2px solid white;
	border-radius: 10px;
`;

const Film = ({ filmInfo }) => {
	return (
		<Li>
			<h3>{filmInfo.titleText.text}</h3>
			<h4>{filmInfo.releaseYear.year}</h4>
			<div>
				{filmInfo.primaryImage ? (
					<img width="300" src={filmInfo.primaryImage.url} alt="" />
				) : (
					<img width="300" src={noPoster} alt="" />
				)}
			</div>
		</Li>
	);
};

export default Film;
