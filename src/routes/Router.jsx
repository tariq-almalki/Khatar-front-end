import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// App & App components
import { App } from '@components/App/App';
import { AppErrorElement } from './errorElements/AppErrorElement/AppErrorElement';

// Profile & Profile components
import { Profile } from '@components/Profile/Profile.jsx';
import { ProfileErrorElement } from './errorElements/ProfileErrorElement/ProfileErrorElement';

// Account
import { Account } from '../components/Profile/children-components/Account/Account';
import { BasicInfo } from '../components/Profile/children-components/Account/BasicInfo/BasicInfo';
import { ContactInfo } from '../components/Profile/children-components/Account/ContactInfo/ContactInfo';
import { ChangePassword } from '../components/Profile/children-components/Account/ChangePassword/ChangePassword';
import { AccountErrorElement } from '../routes/errorElements/AccountErrorElement/AccountErrorElement';

// Team
import { Team } from '../components/Profile/children-components/Team/Team';
import { MyTeam } from '../components/Profile/children-components/Team/MyTeam/MyTeam';
import { SearchTeams } from '../components/Profile/children-components/Team/SearchTeams/SearchTeams';
import { TeamErrorElement } from '../routes/errorElements/TeamErrorElement/TeamErrorElement';

// Friends
import { Friends } from '../components/Profile/children-components/Friends/Friends';
import { MyFriends } from '../components/Profile/children-components/Friends/MyFriends/MyFriends';
import { FriendRequests } from '../components/Profile/children-components/Friends/FriendRequests/FriendRequests';
import { SearchUsers } from '../components/Profile/children-components/Friends/SearchUsers/SearchUsers';
import { FriendsErrorElement } from './errorElements/FriendsErrorElement/FriendsErrorElement';

// Awards
import { Awards } from '../components/Profile/children-components/Awards/Awards';
import { MyAwards } from '../components/Profile/children-components/Awards/MyAwards/MyAwards';
import { TeamAwards } from '../components/Profile/children-components/Awards/TeamAwards/TeamAwards';
import { AwardsErrorElement } from '../routes/errorElements/AwardsErrorElement/AwardsErrorElement';

// Chat
import { Chat } from '../components/Profile/children-components/Chat/Chat';
import { GeneralChat } from '../components/Profile/children-components/Chat/GeneralChat/GeneralChat';
import { FriendsChat } from '../components/Profile/children-components/Chat/FriendsChat/FriendsChat';
import { TeamChat } from '../components/Profile/children-components/Chat/TeamChat/TeamChat';
import { ChatErrorElement } from './errorElements/ChatErrorElement/ChatErrorElement';

// loaders

// actions

export function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <AppErrorElement />,
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
					path: 'awards',
					element: <Awards />,
					errorElement: <AwardsErrorElement />,
					action: undefined,
					loader: undefined,
					children: [
						{
							path: 'my-awards',
							element: <MyAwards />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'team-awards',
							element: <TeamAwards />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
					],
				},
				{
					path: 'account',
					element: <Account />,
					errorElement: <AccountErrorElement />,
					action: undefined,
					loader: undefined,
					children: [
						{
							path: 'basic-info',
							element: <BasicInfo />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'contact-info',
							element: <ContactInfo />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'change-password',
							element: <ChangePassword />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
					],
				},
				{
					path: 'team',
					element: <Team />,
					errorElement: <TeamErrorElement />,
					action: undefined,
					loader: undefined,
					children: [
						{
							path: 'my-team',
							element: <MyTeam />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'search-teams',
							element: <SearchTeams />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
					],
				},
				{
					path: 'friends',
					element: <Friends />,
					errorElement: <FriendsErrorElement />,
					action: undefined,
					loader: undefined,
					children: [
						{
							path: 'my-friends',
							element: <MyFriends />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'friend-requests',
							element: <FriendRequests />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'search-users',
							element: <SearchUsers />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
					],
				},
				{
					path: 'chat',
					element: <Chat />,
					errorElement: <ChatErrorElement />,
					action: undefined,
					loader: undefined,
					children: [
						{
							path: 'general-chat',
							element: <GeneralChat />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'friends-chat',
							element: <FriendsChat />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'team-chat',
							element: <TeamChat />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
					],
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
