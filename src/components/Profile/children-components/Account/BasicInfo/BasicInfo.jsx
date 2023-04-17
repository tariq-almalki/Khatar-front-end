import styled from 'styled-components';

const BasicInfoComponent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 1.5em;
	padding: 0.5em;
	border: 1px solid #ffffff;
	border-radius: 0.6em;
	background-color: #333;
	/* border: 1px solid red; */
`;

const StyledSpan = styled.div`
	font-family: 'Rajdhani';
	font-size: 2em;
	/* border: 1px solid red; */
`;

const StyledDiv1 = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 16.5em;
	gap: 1em;
	border: 1px solid #ffffff;
	border-radius: 0.6em;
	/* border: 1px solid red; */
`;

const StyledDiv2 = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 16.5em;
	gap: 1em;
	border: 1px solid #ffffff;
	border-radius: 0.6em;
	/* border: 1px solid red; */
`;

const StyledDiv3 = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 16.5em;
	border: 1px solid #ffffff;
	border-radius: 0.6em;
	/* border: 1px solid red; */
`;

const StyledHiddenDiv = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 16.5em;
	border-radius: 0.6em;
`;

const StyledMiddle = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 1.5em;
	/* border: 1px solid red; */
`;

const StyledLower = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 1.5em;
`;

export function BasicInfo() {
	return (
		<BasicInfoComponent>
			<StyledSpan>
				<span>Basic Info</span>
			</StyledSpan>
			<StyledMiddle>
				<StyledDiv1>
					<div className="input-group-sm input-group input-group-vertical">
						<span>Name</span>
						<input type="text" placeholder="name" className="input-bordered input input-sm" disabled />
						<button className="btn-sm btn">change</button>
					</div>
					<div className="input-group-sm input-group input-group-vertical">
						<span>Username</span>
						<input type="text" placeholder="username" className="input-bordered input input-sm" disabled />
						<button className="btn-sm btn">change</button>
					</div>
					<div className="input-group-sm input-group input-group-vertical">
						<span>Address</span>
						<input type="email" placeholder="Address" className="input-bordered input input-sm" disabled />
						<button className="btn-sm btn">change</button>
					</div>
				</StyledDiv1>
				<StyledDiv2>
					<div className="input-group-sm input-group input-group-vertical">
						<span>Birthday</span>
						<input type="text" placeholder="Birthday" className="input-bordered input input-sm" disabled />
						<button className="btn-sm btn">change</button>
					</div>
					<div className="input-group-sm input-group input-group-vertical">
						<span>Gender</span>
						<input type="text" placeholder="Gender" className="input-bordered input input-sm" disabled />
						<button className="btn-sm btn">change</button>
					</div>
					<div className="input-group-sm input-group input-group-vertical">
						<span>Type</span>
						<input type="text" placeholder="Type" className="input-bordered input input-sm" disabled />
						<button className="btn-sm btn">change</button>
					</div>
				</StyledDiv2>
			</StyledMiddle>
			<StyledLower>
				<StyledDiv3>
					<textarea
						className="textarea"
						name="bio"
						id="bio"
						disabled
						maxLength={150}
						readOnly
						placeholder="Bio"
						style={{
							resize: 'none',
							height: '100%',
							borderBottomLeftRadius: 0,
							borderBottomRightRadius: 0,
						}}
					></textarea>
					<button className="btn-sm btn account-buttons" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
						change
					</button>
				</StyledDiv3>
				<StyledHiddenDiv />
			</StyledLower>
		</BasicInfoComponent>
	);
}
