import * as yup from 'yup';

export const validationSchema = yup.object({
	name: yup.string().required('Name is Required').min(5).max(15).trim(),
	username: yup
		.string()
		.notOneOf([yup.ref('name')], 'Name and Username should be different')
		.required('Username is Required')
		.min(5)
		.max(15)
		.matches(
			/^(?=.{5,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._-]+(?<![0-9_.])$/,
			"username must be >4, <16, doesn't start with nums,_,."
		),
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be at least 8 characters')
		.test('isValidPass', 'Password must contain capital/small letters, numbers', (value, context) => {
			const hasUpperCase = /[A-Z]/.test(value);
			const hasLowerCase = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			// const hasSymbol = /[!@#%&]/.test(value);
			const validConditions = [hasUpperCase, hasLowerCase, hasNumber].filter(Boolean).length;
			return validConditions === 3;
		}),
	confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
	address: yup.string().required(),
	email: yup
		.string()
		.matches(
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
			'Invalid Email'
		)
		.required('Email is required')
		.trim(),
	phoneNumber: '',
	dob: '',
	gender: yup.string().oneOf(['male', 'female'], 'ONLY Male or Female').required(),
});
