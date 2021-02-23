import { useState, useRef, useContext } from "react";
import { BowlContext } from "../BowlContext/BowlContext";
import styled from "styled-components";

const StyledInput = styled.input`
	background-color: #f3f3f3;
	border: none;
	border-bottom: 2px solid #05668d;
	padding: 0.5rem 1rem;
	margin-top: 3rem;
	min-width: 30rem;
`;

const StyledButton = styled.button`
	height: 100%;
	background-color: transparent;
	border: none;
	font-size: 1.7rem;
	padding: 0.5rem 0 0.5rem 0.5rem;
	cursor: pointer;
`;
const Underline = styled.div`
	padding: 2rem 0;
	span {
		color: #02c39a;
		margin-right: 3rem;
	}
`;
const Input = () => {
	const [result, gameProgress, setGameProgress] = useContext(BowlContext);
	const [turn, setTurn] = useState(false);
	const [counter, setCounter] = useState(0);
	const inputRef = useRef(null);
	const [isLastStrike, setIsLastStrike] = useState(false);
	const submitHandler = () => {
		let updateState;
		const currentValue = inputRef.current.value;
		const validChars =
			Number.isInteger(+currentValue) ||
			currentValue === "X" ||
			currentValue === "x" ||
			currentValue === "/" ||
			currentValue === "-";
		if (currentValue.length !== 1) return;
		else if (!validChars) return;
		else if ((currentValue === "x" || currentValue === "X") && turn) return;
		else if (currentValue === "/" && !turn) return;
		else if (isLastStrike && gameProgress[9].length === 3)
			console.log("game-over STRIKE");
		else {
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
		}
	};
	return (
		<>
			<div>
				<StyledInput
					ref={inputRef}
					type="text"
					onKeyPress={e =>
						e.code === "Enter" || e.code === "NumpadEnter"
							? submitHandler()
							: null
					}
				/>
				<StyledButton onClick={submitHandler}>submit</StyledButton>
			</div>
			<Underline>
				strike: <span>x</span>spare: <span>/</span>zero: <span>-</span>
			</Underline>
		</>
	);
};

export default Input;
