import FrameList from "./FrameList/FrameList";
import Input from "./Input/Input";
import { BowlProvider } from "./BowlContext/BowlContext";
import Wrapper from "./Wrapper/Wrapper";

function App() {
	return (
		<Wrapper>
			<p className="header">Bowling scorer</p>
			<BowlProvider>
				<FrameList />
				<Input />
			</BowlProvider>
		</Wrapper>
	);
}

export default App;
