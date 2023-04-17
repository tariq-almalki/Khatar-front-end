import styled from 'styled-components';

const ContactInfoComponent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1;
	/* border: 1px solid red; */
	gap: 1.5em;
	padding: 0.5em;
	border: 1px solid #ffffff;
	border-radius: 0.6em;
	background-color: #333;
`;

const StyledSpan = styled.div`
	font-family: 'Rajdhani';
	align-self: flex-start;
	font-size: 2em;
	/* border: 1px solid red; */
`;

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 16.5em;
	gap: 1em;
	border: 1px solid #ffffff;
	border-radius: 0.6em;
	/* border: 1px solid red; */
`;

export function ContactInfo() {
	return (
		<ContactInfoComponent>
			<StyledSpan>
				<span>Contact Info</span>
			</StyledSpan>
			<StyledDiv>
				<div className="input-group-sm input-group input-group-vertical">
					<span>Email</span>
					<input type="email" placeholder="Email" className="input-bordered input input-sm" disabled />
					<button className="btn-sm btn">change</button>
				</div>
				<div className="input-group-sm input-group input-group-vertical">
					<span>Phone Number</span>
					<input type="text" placeholder="Phone Number" className="input-bordered input input-sm" disabled />
					<button className="btn-sm btn">change</button>
				</div>
			</StyledDiv>
		</ContactInfoComponent>
	);
}
