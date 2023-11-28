/* eslint-disable react/prop-types */

import styled from "styled-components";

const InputElement = styled.input.attrs({ type: "checkbox" })`
	border: 1px solid #ccc;
	border-radius: 5px;
`;
const LabelElement = styled.label`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	margin-bottom: 10px;
`;

export function Input({ children,setter, id }) {

	return (
		<>
			<LabelElement htmlFor={id} >
				<InputElement onChange={setter} id={id}/>
				{children}
			</LabelElement>
		</>
	);
}
