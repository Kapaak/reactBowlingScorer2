import { useState, useRef, useContext } from "react";
import { BowlContext } from "../BowlContext/BowlContext";

const Input = () => {
	const [gameProgress, setGameProgress, result] = useContext(BowlContext);
	// const [gameProgress, setGameProgress] = useState([]);
	const [turn, setTurn] = useState(false);
	const [counter, setCounter] = useState(0);
	const inputRef = useRef(null);
	const [isLastStrike, setIsLastStrike] = useState(false);

	console.log(result);

	const submitHandler = () => {
		let updateState;
		const currentValue = inputRef.current.value;

		if (counter === 9 && (currentValue === "X" || currentValue === "x")) {
			setIsLastStrike(!isLastStrike);
			firstTurn();
		} else if (isLastStrike) {
			secondTurn();
		} else if (!turn) firstTurn();
		else if (turn) secondTurn();

		console.log(updateState);
		setGameProgress(updateState);
		inputRef.current.value = "";

		if (!isLastStrike) setTurn(!turn);

		function secondTurn() {
			updateState = [...gameProgress].map((el, index) => {
				if (index === counter - 1) return (el = el + currentValue);
				else return el;
			});
		}
		function firstTurn() {
			if (isLastStrike) console.log("pp");
			updateState = [...gameProgress, currentValue];
			setCounter(prev => prev + 1);
		}

		if (currentValue === "x" || currentValue === "X") {
			if (!isLastStrike) setTurn(false);
		}
	};
	return (
		<>
			<input
				ref={inputRef}
				type="text"
				onKeyPress={e => (e.code === "Enter" ? submitHandler() : null)}
			/>
			<button onClick={submitHandler}>submit</button>
		</>
	);
};

export default Input;
