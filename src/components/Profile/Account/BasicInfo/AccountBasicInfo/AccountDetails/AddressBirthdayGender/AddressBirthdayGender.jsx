import styled from 'styled-components';

const StyledAddressBirthdayGender = styled.div``;

export function AddressBirthdayGender() {
	return (
		<StyledAddressBirthdayGender>
			<div>
				<label className="label">
					<span className="label-text">Address</span>
				</label>
				<input type="text" placeholder="Type here" className="input-bordered input w-full max-w-xs" />
			</div>
			<div>
				<label className="label">
					<span className="label-text">Birthday</span>
				</label>
				<input type="text" placeholder="Type here" className="input-bordered input w-full max-w-xs" />
			</div>
			<div>
				<label className="label">
					<span className="label-text">Gender</span>
				</label>
				<input type="text" placeholder="Type here" className="input-bordered input w-full max-w-xs" />
			</div>
		</StyledAddressBirthdayGender>
	);
}
