import * as yup from 'yup';

export const validationSchema = yup.object({
	name: yup.string().required('Name is Required').min(5).max(15).ensure().trim(),
	username: yup
		.string()
		.notOneOf([yup.ref('name')], 'Name and Username should be different')
		.required('Username is Required')
		.min(5)
		.max(15)
		.matches(
			/^(?=.{5,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
			"name must be >5, <15, doesn't start with nums or _"
		),
	address: yup.string().required(),
	// add date.min and date.max if you chose the way you will be displaying date.
	birthday: yup.string().required(),
	gender: yup.string().oneOf(['male', 'female'], 'ONLY Male or Female').required(),
	userType: yup.string().notOneOf(['normal', 'super', 'admin'], 'CAN NOT BE SET'),
	bio: yup.string().max(150).ensure().trim(),
});
