import Frame from "../Frame/Frame";
import { useContext } from "react";
import { BowlContext } from "../BowlContext/BowlContext";
import styled from "styled-components";

const FrameWrapper = styled.div`
	display: flex;
`;
const FrameList = () => {
	const [result] = useContext(BowlContext);
	return (
		<FrameWrapper>
			{result.map((el, index) => {
				return <Frame frame={el} index={index} key={index} />;
			})}
		</FrameWrapper>
	);
};

export default FrameList;
