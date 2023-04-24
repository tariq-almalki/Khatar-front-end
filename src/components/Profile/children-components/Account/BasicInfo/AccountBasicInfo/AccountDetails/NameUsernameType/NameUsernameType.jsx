import styled from 'styled-components';

const StyledNameUsernameType = styled.div``;

export function NameUsernameType() {
	return (
		<StyledNameUsernameType>
			<div>
				<label className="label">
					<span className="label-text">Name</span>
				</label>
				<input type="text" placeholder="Type here" className="input-bordered input w-full max-w-xs" />
			</div>
			<div>
				<label className="label">
					<span className="label-text">Username</span>
				</label>
				<input type="text" placeholder="Type here" className="input-bordered input w-full max-w-xs" />
			</div>
			<div>
				<label className="label">
					<span className="label-text">Type</span>
				</label>
				<input type="text" placeholder="Type here" className="input-bordered input w-full max-w-xs" />
			</div>
		</StyledNameUsernameType>
	);
}
