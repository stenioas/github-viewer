import styled from "styled-components";

export default function Header() {
	const Container = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 6rem;
		padding: 0 2rem;
		background-color: #fafafa;
	`;
	const Wrapper = styled.div`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`;
	const ToggleButton = styled.span`
		font-size: 1.5rem;
		color: #2d2d2d;
		margin-right: 1rem;
	`;
	const SearchBox = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 40rem;
		height: 2.5rem;
		border-radius: 0.25rem;
		background-color: #f1f1f1;
	`;
	const SearchInput = styled.input`
		width: 100%;
		height: 2.5rem;
		font-size: 1rem;
		border: none;
		border-radius: 0.25rem;
		background-color: #f1f1f1;
		outline: none;
		padding: 0 1rem;
	`;
	const SearchIcon = styled.span`
		font-size: 1.25rem;
		color: #2d2d2d;
		margin: 0 1rem;
	`;
	const ExitButton = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 1rem;
	`;
	const ExitButtonIcon = styled.span`
		font-size: 1.5rem;
		color: #2d2d2d;
	`;
	const ExitButtonText = styled.span`
		color: #2d2d2d;
		margin-left: 0.5rem;
	`;

	return (
		<Container>
			<Wrapper>
				<ToggleButton className="material-icons">
					format_indent_increase
				</ToggleButton>
				<SearchBox>
					<SearchInput placeholder="Pesquisar" />
					<SearchIcon className="material-icons">search</SearchIcon>
				</SearchBox>
				<ExitButton>
					<ExitButtonIcon className="material-icons">logout</ExitButtonIcon>
					<ExitButtonText>Sair</ExitButtonText>
				</ExitButton>
			</Wrapper>
		</Container>
	);
}
