import styled from 'styled-components';

const AccountBioComponent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 1em;
	padding-bottom: 1em;
`;

const StyledTextarea = styled.textarea`
	flex-grow: 1;
	max-width: 450px;

	@media only screen and (max-width: 607px) {
		max-width: 217px;
	}
`;

export function AccountBio() {
	return (
		<AccountBioComponent>
			<StyledTextarea placeholder="Bio" className="textarea-bordered textarea textarea-md"></StyledTextarea>
		</AccountBioComponent>
	);
}
