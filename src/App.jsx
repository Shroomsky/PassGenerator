import { useState } from "react";
import { Button } from "./components/Button/Button";
import { From } from "./components/Form/Form";
import "./App.css";

export default function App() {
	const [pass, setPass] = useState("");
	const [passShown, setPassShown] = useState(false);
	const [mask, setMask] = useState("");

	function handleShowPassBtnClick() {
		setPassShown((prevState) => !prevState);
	}

	function handleCopyBtnClick() {
		navigator.clipboard.writeText(pass).then(
			() => {
				alert("Hasło skopiowano do schowka!");
			},
			(error) => {
				console.error("hasło nie skopiowane", error);
			}
		);
	}

	return (
		<div className="appContainer">
			<From setPass={setPass} setMask={setMask}></From>
			{pass.length > 0 && (
				<>
					<div className="pass">
						<strong>Twoje hasło:</strong>
						<div className="password">{passShown ? pass : mask}</div>
					</div>
					<div className="pass-option-btns">
						<Button color="#5798d6" onClick={handleShowPassBtnClick}>
							{passShown ? "Schowaj" : "Pokaż"}
						</Button>
						<Button color="#5798d6" onClick={handleCopyBtnClick}>
							Kopiuj
						</Button>
					</div>
				</>
			)}
		</div>
	);
}
