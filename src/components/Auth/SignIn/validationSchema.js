import * as yup from 'yup';

export const validationSchema = yup.object({
	email: yup.string().email('Invalid Email').required('Email is required').trim(),
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters')
		.test('isValidPass', 'Password is not valid', (value, context) => {
			const hasUpperCase = /[A-Z]/.test(value);
			const hasLowerCase = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			const hasSymbol = /[!@#%&]/.test(value);
			const validConditions = [hasUpperCase, hasLowerCase, hasNumber, hasSymbol].filter(Boolean).length;
			return validConditions === 4;
		}),
});
