import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import { App } from '@components/App/App';
import { Profile } from '@components/Profile/Profile.jsx';

// loaders

// actions

export function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: null,
			action: undefined,
			loader: undefined,
			children: [
				{
					path: '/help',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: '/poll',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
			],
		},
		{
			path: '/profile',
			element: <Profile />,
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
