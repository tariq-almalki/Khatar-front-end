import * as yup from 'yup';

export const validationSchema = yup.object({
	verify: yup.string().required('Field is required').oneOf(['delete my account'], 'type it!'),
});
