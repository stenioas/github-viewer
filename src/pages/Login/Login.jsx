import styled from "styled-components";
import Form from "../../../src/components/Form";

export default function Login() {
	const Wrapper = styled.div`
		position: relative;
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	`;
	const Logo = styled.img`
		top: 8rem;
		position: absolute;
		margin: 0 auto;
	`;

	return (
		<Wrapper>
			<Logo src="logo.svg" alt="Logo" />
			<Form />
		</Wrapper>
	);
}
