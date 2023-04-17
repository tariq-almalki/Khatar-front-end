import styled from 'styled-components';
import { Form } from 'react-router-dom';

const ChangePasswordPromptComponent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 0.2;
	flex-grow: 1;
	gap: 1.5em;
	padding: 0.5em;
	border: 1px solid #ffffff;
	border-radius: 0.6em;
	background-color: #333;
	/* border: 1px solid red; */
`;

const StyledDiv = styled.div`
	font-family: 'Rajdhani';
	font-size: 2em;
	/* border: 1px solid red; */
`;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5em;
`;

const StyledDivs = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 16.5em;
	border: 1px solid #fff;
	border-radius: 0.6em;
	gap: 1em;
`;

export function ChangePasswordPrompt() {
	return (
		<ChangePasswordPromptComponent>
			<StyledDiv>
				<span>Change Password</span>
			</StyledDiv>
			<StyledForm action="">
				<StyledDivs>
					<div className="input-group-sm input-group input-group-vertical">
						<span>Old Password</span>
						<input type="password" className="input-bordered input input-sm" disabled />
						<button className="btn-sm btn">change</button>
					</div>
					<div className="input-group-sm input-group input-group-vertical">
						<span>New Password</span>
						<input type="password" className="input-bordered input input-sm" disabled />
						<button className="btn-sm btn">change</button>
					</div>
					<div className="input-group-sm input-group input-group-vertical">
						<span>Confirm new Password</span>
						<input type="password" className="input-bordered input input-sm" disabled />
						<button className="btn-sm btn">change</button>
					</div>
				</StyledDivs>
			</StyledForm>
		</ChangePasswordPromptComponent>
	);
}
