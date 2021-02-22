import "./App.css";
import bowl from "bowling";
import { useState, useRef } from "react";

function App() {
	const [gameProgress, setGameProgress] = useState([]);
	const [turn, setTurn] = useState(false);
	const [counter, setCounter] = useState(0);
	const inputRef = useRef(null);
	const [isLastStrike, setIsLastStrike] = useState(false);

	const result = bowl(gameProgress);
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
		<div>
			<p>Bowling scorer</p>
			<div className="input">
				<input
					ref={inputRef}
					type="text"
					onKeyPress={e => (e.code === "Enter" ? submitHandler() : null)}
				/>
				<button onClick={submitHandler}>submit</button>
			</div>
		</div>
	);
}

export default App;
// function App() {
// 	const [gameProgress, setGameProgress] = useState([]);
// 	const [turn, setTurn] = useState(false);
// 	const [counter, setCounter] = useState(0);
// 	const inputRef = useRef(null);
// 	const [isLastStrike, setIsLastStrike] = useState(false);

// 	const result = bowl(gameProgress);
// 	console.log(result);

// 	const submitHandler = () => {
// 		let updateState;
// 		const currentValue = inputRef.current.value;

// 		if (counter === 9 && (currentValue === "X" || currentValue === "x")) {
// 			setIsLastStrike(!isLastStrike);
// 			firstTurn();
// 		} else if (isLastStrike) {
// 			secondTurn();
// 		} else if (!turn) firstTurn();
// 		else if (turn) secondTurn();

// 		console.log(updateState);
// 		setGameProgress(updateState);
// 		inputRef.current.value = "";

// 		if (!isLastStrike) setTurn(!turn);

// 		function secondTurn() {
// 			updateState = [...gameProgress].map((el, index) => {
// 				if (index === counter - 1) return (el = el + currentValue);
// 				else return el;
// 			});
// 		}
// 		function firstTurn() {
// 			if (isLastStrike) console.log("pp");
// 			updateState = [...gameProgress, currentValue];
// 			setCounter(prev => prev + 1);
// 		}

// 		if (currentValue === "x" || currentValue === "X") {
// 			if (!isLastStrike) setTurn(false);
// 		}
// 	};
// 	return (
// 		<div>
// 			<p>Bowling scorer</p>
// 			<div className="input">
// 				<input
// 					ref={inputRef}
// 					type="text"
// 					onKeyPress={e => (e.code === "Enter" ? submitHandler() : null)}
// 				/>
// 				<button onClick={submitHandler}>submit</button>
// 			</div>
// 		</div>
// 	);
// }

// export default App;

//-------------------------------

// function App() {
// 	const compleateGame = [
// 		"81",
// 		"9-",
// 		"9/",
// 		"71",
// 		"9-",
// 		"X",
// 		"90",
// 		"70",
// 		"x",
// 		"7-",
// 	];
// 	const result = bowl(compleateGame);
// 	console.log(result);
// 	return <div className="App"></div>;
// }

// export default App;
