import React from "react";
import styled from "styled-components";

export default function Form() {
	const DivForm = styled.div`
		display: flex;
		padding: 2rem;
		background-color: #2d2d2d;
		border-radius: 0.4rem;
	`;
	const Form = styled.form``;
	const Title = styled.h1`
		font-size: 1.2rem;
		font-weight: 700;
		text-align: center;
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
		border-radius: 0.4rem;
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
		font-size: 0.8rem;
		color: #fafafa;
		margin-top: 0.4rem;
	`;
	const Button = styled.button`
		display: block;
		width: 22.5rem;
		height: 3rem;
		font-weight: 700;
		border-radius: 0.4rem;
		border: none;
		background-color: #4dffc3;
		cursor: pointer;
		margin-top: 2rem;
		transition: 0.2s;
		&:hover {
			background-color: #00ffaa;
		}
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
				<Button type="submit">Entrar</Button>
			</Form>
		</DivForm>
	);
}
