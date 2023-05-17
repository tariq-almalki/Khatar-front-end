import * as yup from 'yup';

export const validationSchema = yup.object({
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters')
		.test('isValidPass', 'Invalid Password, must contain A-Z,a-z,0-9', (value, context) => {
			const hasUpperCase = /[A-Z]/.test(value);
			const hasLowerCase = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			const validConditions = [hasUpperCase, hasLowerCase, hasNumber].filter(Boolean).length;
			return validConditions === 3;
		}),
});
