import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';

// App & App components
import { App } from '@components/App/App';

// Profile & Profile components
import { Profile } from '@components/Profile/Profile.jsx';
import { ProfileErrorElement } from '../components/Profile/ProfileErrorElement.jsx';
import { Account } from '../components/Profile/children-components/Account/Account.jsx';
import { Team } from '../components/Profile/children-components/Team/Team.jsx';

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
			errorElement: <ProfileErrorElement />,
			action: undefined,
			loader: undefined,
			children: [
				{
					path: 'badges',
					element: null,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'account',
					element: <Account />,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'team',
					element: <Team />,
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
					path: 'chat',
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
