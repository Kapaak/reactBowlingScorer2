import "./App.css";
import FrameList from "./FrameList/FrameList";
import Input from "./Input/Input";
import { BowlProvider } from "./BowlContext/BowlContext";

function App() {
	return (
		<div>
			<p>Bowling scorer</p>
			<BowlProvider>
				<div className="input">
					<Input />
				</div>
				<FrameList />
			</BowlProvider>
		</div>
	);
}

export default App;
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
