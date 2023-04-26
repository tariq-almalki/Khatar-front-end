import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSubmit, useNavigation, Form } from 'react-router-dom';
import { useFormik } from 'formik';

// validation schema
import { validationSchema } from './validationSchema';

// animations
import { accountAnimations } from '../accountAnimations';

const ContactInfoComponent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	justify-content: start;
	font-family: 'Rajdhani';
`;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1em;
	flex-grow: 0.5;
	max-width: 820px;
	min-width: 219px;
`;

const StyledButton = styled.button`
	background-color: #2a303c;
	border-radius: 0.5em;
	border: 1px solid rgba(166, 173, 187, 0.2);
	padding: 0.2em;
`;

export function ContactInfo() {
	const navigation = useNavigation();
	const submit = useSubmit();
	const formik = useFormik({
		initialValues: {
			name: '',
			username: '',
			address: '',
			birthday: '',
			gender: '',
			userType: '',
			bio: '',
		},
		validationSchema,
		onSubmit: async values => {
			submit(values, { method: 'post' });
		},
	});

	return (
		<ContactInfoComponent {...accountAnimations}>
			<StyledForm>
				<div>
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input type="text" placeholder="Type here" className="input-bordered input w-full max-w-xs" />
				</div>
				<div>
					<label className="label">
						<span className="label-text">Phone Number</span>
					</label>
					<input type="text" placeholder="Type here" className="input-bordered input w-full max-w-xs" />
				</div>
				<div>
					<StyledButton>Update Contact Info</StyledButton>
				</div>
			</StyledForm>
		</ContactInfoComponent>
	);
}
