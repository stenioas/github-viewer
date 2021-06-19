import React from "react";
import styled from "styled-components";

export default function Form() {
	const DivForm = styled.div`
		display: flex;
		padding: 2rem;
		background-color: #2d2d2d;
		border-radius: 5px;
	`;
	const Form = styled.form``;
	const Title = styled.h1`
		font-weight: 700;
		color: #fafafa;
	`;
	const Fieldset = styled.fieldset`
		margin-top: 2rem;
		border: none;
	`;
	const Input = styled.input`
		display: block;
		width: 22.5rem;
		height: 3rem;
		border-radius: 5px;
		border: none;
		background-color: #f1f1f1;
		font-size: 1rem;
		font-weight: 400;
		padding: 0 1rem;
	`;
	const InputPass = styled(Input)`
		margin-top: 1rem;
	`;
	const ForgotPass = styled.a`
		display: flex;
		justify-content: flex-end;
		font-size: 0.75rem;
		color: #fafafa;
		margin-top: 0.5rem;
	`;
	const Button = styled.button`
		display: block;
		width: 22.5rem;
		height: 3rem;
		font-weight: 700;
		border-radius: 5px;
		border: none;
		background-color: #00ffaa;
		cursor: pointer;
		margin-top: 1rem;
	`;

	return (
		<DivForm>
			<Form>
				<Title>LOGIN</Title>
				<Fieldset>
					<Input type="text" placeholder="Usuário"></Input>
					<InputPass type="password" placeholder="Senha"></InputPass>
				</Fieldset>
				<ForgotPass href="#">Esqueceu a senha?</ForgotPass>
				<Button type="submit">ENTRAR</Button>
			</Form>
		</DivForm>
	);
}
