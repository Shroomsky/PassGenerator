/* eslint-disable react/prop-types */

import styled from "styled-components";

const Btn = styled.button`
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	margin: 10px 0;
	color: #fff;
	background-color: ${({ $bgColor }) => $bgColor};
	cursor: pointer;
	transition: filter 0.3s;
	&:hover {
		filter: brightness(0.9);
	}
`;
export function Button({ children, color, onClick }) {
	return (
		<>
			<Btn $bgColor={color} onClick={onClick}>
				{children}
			</Btn>
		</>
	);
}
