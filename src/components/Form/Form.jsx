/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/inputLabel";
import { generator } from "../../utili/generator";

const initialCharset = "abcdefghijklmnopqrstuvwxyz";

const spec = "^[!@#$%^&*()_+-=\\[]{};':|,.<>/?]*$";
const num = "0123456789";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function From({ setPass, setMask }) {
	const [length, setLength] = useState(12);
	const [option, setOption] = useState({
		special: false,
		number: false,
		upperCase: false,
	});

	function handleSubmit(e) {
		e.preventDefault();
		const pass = generator(charset, length);
		setPass(pass);
		let mask = "";
		// eslint-disable-next-line no-unused-vars
		for (let i of pass) {
			mask += "*";
		}
		setMask(mask);
	}

	function handleChange(e, set) {
		if (e.target.checked) {
			setOption((prev) => ({ ...prev, [set]: true }));
		} else {
			setOption((prev) => ({ ...prev, [set]: false }));
		}
	}

	const charset =
		initialCharset +
		`${option.special ? spec : ""}${option.number ? num : ""}${
			option.upperCase ? upper : ""
		}`;

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="length">
					Długość hasła:
					<input
						className="passLength"
						type="number"
						name=""
						id="length"
						min="4"
						max="24"
						value={length}
						onChange={(e) => setLength(e.target.value)}
					/>
				</label>
				<div className="generator-option">
					<Input id="spec" setter={(e) => handleChange(e, "special")}>
						Znaki Specjalne
					</Input>

					<Input id="num" setter={(e) => handleChange(e, "number")}>
						Numery
					</Input>

					<Input id="udpper" setter={(e) => handleChange(e, "upperCase")}>
						Wielkie litery
					</Input>
				</div>
				<Button color="#4caf50">Generuj Hasło</Button>
			</form>
		</>
	);
}
