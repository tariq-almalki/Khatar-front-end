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
					path: 'user',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'team',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'friends',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'help-requests',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'polls',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'notifications',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'settings',
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
