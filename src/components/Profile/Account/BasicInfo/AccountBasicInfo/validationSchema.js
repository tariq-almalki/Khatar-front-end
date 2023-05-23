import * as yup from 'yup';

export const validationSchema = yup.object({
	name: yup.string().required('Name is Required').min(5).max(15).ensure().trim(),
	username: yup
		.string()
		.notOneOf([yup.ref('name')], 'Name and Username should be different')
		.required('Username is Required')
		.min(5, 'username must be >4')
		.max(15, 'username must be <16')
		.matches(/^(?=.{5,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![0-9_.])$/, "username mustn't start with nums or _"),
	address: yup.string().required(),
	dob: yup.string().required(),
	gender: yup.string().oneOf(['male', 'female'], 'ONLY Male or Female').required(),
	type: yup.string().notOneOf(['normal', 'super', 'admin'], 'CAN NOT BE SET'),
	bio: yup.string().max(150).ensure().trim(),
});
