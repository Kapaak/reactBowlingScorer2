import styled from "styled-components";
import FrameElement from "../FrameElement/FrameElement";

const FrameFragment = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 11.5rem;
	min-height: 15.5rem;
	text-align: center;
	margin: 0 0.5rem;

	.headline {
		padding: 0.8rem 0;
		background-color: #00a896;
		font-weight: 600;
		font-size: 1.4rem;
		box-shadow: 1px 2px 13px 1px rgb(5 5 5 / 20%);
		border-radius: 0.5rem 0.5rem 0 0;
	}
	.body {
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
		background-color: #02c39a;
		max-height: 9.22rem;

		box-shadow: 1px 2px 13px 1px rgb(5 5 5 / 20%);
		.score {
			padding: 0.5rem 0.9rem;
			font-size: 2rem;
			background-color: #00a896;
			border: 1px solid #f0f3bd;
			color: #f0f3bd;
			margin: 0.35rem 0.35rem 0 0;
		}
	}
	.total-score {
		font-size: 2.2rem;
		padding: 0.2rem;
		font-weight: 300;
	}
`;

const Frame = ({ frame, index }) => {
	const cutResult = () => {
		return [...frame.outcome];
	};
	return (
		<FrameFragment>
			<div className="headline">{index + 1}</div>
			<div className="body">
				{cutResult().map((el, i) => {
					return <FrameElement el={el} key={i} />;
				})}
			</div>
			<div className="total-score">{frame.cumulative}</div>
		</FrameFragment>
	);
};

export default Frame;
