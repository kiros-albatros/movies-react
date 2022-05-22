import React from "react";

const Pagination = ({ page, pageHandlerNext, pageHandlerPrev, hasNext }) => {
	const next = page + 1;
	const prev = page - 1;
	return (
		<div>
			{page > 1 ? (
				<button onClick={() => pageHandlerPrev(prev)}>prev</button>
			) : (
				""
			)}
			<span>{page}</span>
			{hasNext && (
				<button onClick={() => pageHandlerNext(next)}>next</button>
			)}
		</div>
	);
};

export default Pagination;
