import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components

// loaders

// actions

export function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: null,
			errorElement: null,
			action: undefined,
			loader: undefined,
			children: [
				{
					path: 'request-for-help',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'create-poll',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
			],
		},
		{
			path: 'profile',
			element: null,
			errorElement: null,
			action: undefined,
			loader: undefined,
			children: [
				{
					path: undefined,
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
