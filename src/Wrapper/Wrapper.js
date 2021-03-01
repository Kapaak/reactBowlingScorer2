import styled from "styled-components";
const Wrapp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	min-width: 100vw;

	.header {
		position: absolute;
		top: 0;
		left: 0;
		padding: 1rem;
		font-size: 2.8rem;
	}
`;
const Wrapper = ({ children }) => {
	return <Wrapp>{children}</Wrapp>;
};

export default Wrapper;
