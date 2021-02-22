import Frame from "../Frame/Frame";
import { useContext } from "react";
import { BowlContext } from "../BowlContext/BowlContext";

const FrameList = () => {
	const [result] = useContext(BowlContext);
	console.log(result.outcome);
	return (
		<div>
			{result.map(el => {
				return <Frame frame={el} />;
			})}
		</div>
	);
};

export default FrameList;
