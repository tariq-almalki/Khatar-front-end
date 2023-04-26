import * as yup from 'yup';

const saudiArabianPhoneNumberRegExp = /^(?:\+966|966|0)(?<phone>\d{9})$/;

export const validationSchema = yup.object({
	email: yup.string().email('Invalid Email').required('Email is required'),
	phoneNumber: yup
		.string()
		.required('Phone number is required')
		.matches(saudiArabianPhoneNumberRegExp, 'Invalid phone number format'),
});
