import React from "react";
import styled from "styled-components";

export default function Form() {
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
