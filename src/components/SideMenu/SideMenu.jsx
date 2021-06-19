import { memo } from "react";
import styled from "styled-components";

function SideMenu() {
	const Wrapper = styled.div`
		width: 17.5rem;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		background-color: #99ffdd;
	`;
	const Header = styled.header`
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 1.625rem 1.5rem;
	`;
	const Logo = styled.img`
		width: 13.5rem;
	`;
	const Nav = styled.nav`
		width: 100%;
	`;
	const UList = styled.ul``;
	const LItem = styled.li`
		width: 100%;
		height: 4rem;
		display: flex;
		align-items: center;
		font-size: 1rem;
		color: #2d2d2d;
		padding: 0 1.5rem;
		&.active {
			background-color: #00ffaa;
		}
	`;
	const LItemIcon = styled.span`
		font-size: 1.5rem;
		color: #2d2d2d;
	`;
	const LItemText = styled.span`
		font-size: 1rem;
		color: #2d2d2d;
		margin-left: 0.5rem;
	`;

	return (
		<Wrapper>
			<Header>
				<Logo src="logo.svg" alt="Logo" />
			</Header>
			<Nav>
				<UList>
					<LItem className="active">
						<LItemIcon className="material-icons">person</LItemIcon>
						<LItemText>Perfil</LItemText>
					</LItem>
					<LItem>
						<LItemIcon className="material-icons">list</LItemIcon>
						<LItemText>Repositórios</LItemText>
					</LItem>
				</UList>
			</Nav>
		</Wrapper>
	);
}

export default memo(SideMenu);
