import * as yup from 'yup';

export const validationSchema = yup.object({
	oldPassword: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
	newPassword: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters')
		.test('isValidPass', 'Password is not valid', value => {
			const hasUpperCase = /[A-Z]/.test(value);
			const hasLowerCase = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			const validConditions = [hasUpperCase, hasLowerCase, hasNumber].filter(Boolean).length;
			return validConditions === 3;
		}),
	confirmNewPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
});
