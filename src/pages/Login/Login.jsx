import styled from "styled-components";
import Form from "../../../src/components/Form";

export default function Login() {
	const Wrapper = styled.div`
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	`;

	return (
		<Wrapper>
			<Form />
		</Wrapper>
	);
}
