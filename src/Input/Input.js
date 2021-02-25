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
	const [hasBonus, setHasBonus] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);
	const submitHandler = () => {
		let updateState;
		let currentValue = inputRef.current.value;
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
		else {
			if (
				counter === 10 &&
				(currentValue === "/" ||
					parseInt(gameProgress[counter - 1]) + parseInt(currentValue) === 10)
			) {
				setHasBonus(true);
				secondTurn();
			}
			if (counter === 9 && (currentValue === "X" || currentValue === "x")) {
				setHasBonus(true);
				firstTurn();
			} else if (hasBonus) {
				secondTurn();
			} else if (!turn) firstTurn();
			else if (turn) secondTurn();

			if (!isGameOver) {
				if (hasBonus && counter === 10 && gameProgress[9].length === 2)
					setIsGameOver(true);
				else if (
					parseInt(gameProgress[counter - 1]) + parseInt(currentValue) < 10 &&
					counter === 10
				)
					setIsGameOver(true);

				if (!currentValue) return;
				setGameProgress(updateState);
				inputRef.current.value = "";
				if (!hasBonus) setTurn(!turn);

				if (currentValue === "x" || currentValue === "X") {
					if (!hasBonus) setTurn(false);
				}
			}
		}
		function secondTurn() {
			updateState = [...gameProgress].map((el, index) => {
				if (index === counter - 1) {
					if (parseInt(el) + parseInt(currentValue) > 10) {
						return (currentValue = false);
					}
					if (
						parseInt(el) + parseInt(currentValue) === 10 &&
						gameProgress[9]?.length !== 2
					) {
						console.log("bar");
						return (el = el + "/");
					}
					return (el = el + currentValue);
				} else return el;
			});
		}
		function firstTurn() {
			updateState = [...gameProgress, currentValue];
			setCounter(prev => prev + 1);
		}
	};
	const reset = () => {
		setTurn(false);
		setCounter(0);
		setHasBonus(false);
		setGameProgress([]);
		setIsGameOver(false);
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
				{isGameOver ? (
					<StyledButton onClick={reset}>restart</StyledButton>
				) : null}
			</div>
			<Underline>
				strike: <span>x</span>spare: <span>/</span>zero: <span>-</span>
			</Underline>
		</>
	);
};

export default Input;
