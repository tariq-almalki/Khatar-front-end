import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// hooks
import { useLocalStorage } from '../hooks/useLocalStorage';

// App & App components
import { App } from '@components/App/App';
import { AppErrorElement } from './errorElements/AppErrorElement/AppErrorElement';

// --------------------------------------------------------------------------------------------------------------------

// Profile & Profile components
import { Profile } from '@components/Profile/Profile.jsx';
import { ProfileErrorElement } from './errorElements/ProfileErrorElement/ProfileErrorElement';
import { profileLoader } from './loaders/profileLoader/profileLoader';

// Account
import { Account } from '../components/Profile/Account/Account';
import { BasicInfo } from '../components/Profile/Account/BasicInfo/BasicInfo';
import { ContactInfo } from '../components/Profile/Account/ContactInfo/ContactInfo';
import { ChangePassword } from '../components/Profile/Account/ChangePassword/ChangePassword';
import { DeleteAccount } from '../components/Profile/Account/DeleteAccount/DeleteAccount';
import { AccountErrorElement } from '../routes/errorElements/AccountErrorElement/AccountErrorElement';

// Team
import { Team } from '../components/Profile/Team/Team';
import { MyTeam } from '../components/Profile/Team/MyTeam/MyTeam';
import { SearchTeams } from '../components/Profile/Team/SearchTeams/SearchTeams';
import { TeamErrorElement } from '../routes/errorElements/TeamErrorElement/TeamErrorElement';

// Friends
import { Friends } from '../components/Profile/Friends/Friends';
import { MyFriends } from '../components/Profile/Friends/MyFriends/MyFriends';
import { FriendRequests } from '../components/Profile/Friends/FriendRequests/FriendRequests';
import { SearchUsers } from '../components/Profile/Friends/SearchUsers/SearchUsers';
import { FriendsErrorElement } from './errorElements/FriendsErrorElement/FriendsErrorElement';

// Awards
import { Awards } from '../components/Profile/Awards/Awards';
import { MyAwards } from '../components/Profile/Awards/MyAwards/MyAwards';
import { TeamAwards } from '../components/Profile/Awards/TeamAwards/TeamAwards';
import { AwardsErrorElement } from '../routes/errorElements/AwardsErrorElement/AwardsErrorElement';

// Chat
import { Chat } from '../components/Profile/Chat/Chat';
import { GeneralChat } from '../components/Profile/Chat/GeneralChat/GeneralChat';
import { FriendsChat } from '../components/Profile/Chat/FriendsChat/FriendsChat';
import { TeamChat } from '../components/Profile/Chat/TeamChat/TeamChat';
import { ChatErrorElement } from './errorElements/ChatErrorElement/ChatErrorElement';

// Help Requests
import { HelpRequests } from '../components/Profile/HelpRequests/HelpRequests';
import { MyHelpRequests } from '../components/Profile/HelpRequests/MyHelpRequests/MyHelpRequests';
import { OthersHelpRequests } from '../components/Profile/HelpRequests/OthersHelpRequests/OthersHelpRequests';
import { HelpRequestsErrorElement } from './errorElements/HelpRequestsErrorElement/HelpRequestsErrorElement';

// Polls
import { Polls } from '../components/Profile/Polls/Polls';
import { OthersPolls } from '../components/Profile/Polls/OthersPolls/OthersPolls';
import { MyPolls } from '../components/Profile/Polls/MyPolls/MyPolls';
import { PollsErrorElement } from './errorElements/PollsErrorElement/PollsErrorElement';

// Notifications
import { Notifications } from '../components/Profile/Notifications/Notifications';
import { AllNotifications } from '../components/Profile/Notifications/AllNotifications/AllNotifications';
import { InvitationRequestsNotifications } from '../components/Profile/Notifications/InvitationRequestsNotifications/InvitationRequestsNotifications';
import { AwardsNotifications } from '../components/Profile/Notifications/AwardsNotifications/AwardsNotifications';
import { HelpRequestsNotifications } from '../components/Profile/Notifications/HelpRequestsNotifications/HelpRequestsNotifications';
import { PollsNotifications } from '../components/Profile/Notifications/PollsNotifications/PollsNotifications';
import { NotificationsErrorElement } from './errorElements/NotificationsErrorElement/NotificationsErrorElement';

// --------------------------------------------------------------------------------------------------------------------

// Auth components
import { Auth } from '../components/Auth/Auth';
import { AuthErrorElement } from './errorElements/AuthErrorElement/AuthErrorElement';
import { AuthPage } from '../components/Auth/AuthPage/AuthPage';

// SignIn
import { SignIn } from '../components/Auth/SignIn/SignIn';

// SignUp
import { SignUp } from '../components/Auth/SignUp/SignUp';

// ForgotPassword
import { ForgotPassword } from '../components/Auth/ForgotPassword/ForgotPassword';

// --------------------------------------------------------------------------------------------------------------------

export function Router() {
	const [theme] = useLocalStorage('theme', 'dark');

	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <AppErrorElement theme={theme} />,
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
			errorElement: <ProfileErrorElement theme={theme} />,
			action: undefined,
			// loader: profileLoader,
			children: [
				{
					path: 'awards',
					element: <Awards />,
					errorElement: <AwardsErrorElement theme={theme} />,
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
					errorElement: <AccountErrorElement theme={theme} />,
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
						{
							path: 'delete-account',
							element: <DeleteAccount />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
					],
				},
				{
					path: 'team',
					element: <Team />,
					errorElement: <TeamErrorElement theme={theme} />,
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
					errorElement: <FriendsErrorElement theme={theme} />,
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
					errorElement: <ChatErrorElement theme={theme} />,
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
					element: <HelpRequests />,
					errorElement: <HelpRequestsErrorElement theme={theme} />,
					action: undefined,
					loader: undefined,
					children: [
						{
							path: 'my-help-requests',
							element: <MyHelpRequests />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'others-help-requests',
							element: <OthersHelpRequests />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
					],
				},
				{
					path: 'polls',
					element: <Polls />,
					errorElement: <PollsErrorElement />,
					action: undefined,
					loader: undefined,
					children: [
						{
							path: 'my-polls',
							element: <MyPolls />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'others-polls',
							element: <OthersPolls />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
					],
				},
				{
					path: 'notifications',
					element: <Notifications />,
					errorElement: <NotificationsErrorElement theme={theme} />,
					action: undefined,
					loader: undefined,
					children: [
						{
							path: 'all-notifications',
							element: <AllNotifications />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'invitation-requests-notifications',
							element: <InvitationRequestsNotifications />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'awards-notifications',
							element: <AwardsNotifications />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'help-requests-notifications',
							element: <HelpRequestsNotifications />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
						{
							path: 'polls-notifications',
							element: <PollsNotifications />,
							errorElement: null,
							action: undefined,
							loader: undefined,
						},
					],
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
		{
			path: '/auth',
			element: <Auth />,
			errorElement: <AuthErrorElement theme={theme} />,
			action: undefined,
			loader: undefined,
			children: [
				{
					index: true,
					element: <AuthPage />,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'sign-in',
					element: <SignIn />,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'sign-up',
					element: <SignUp />,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
				{
					path: 'forgot-password',
					element: <ForgotPassword />,
					errorElement: null,
					action: undefined,
					loader: undefined,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
