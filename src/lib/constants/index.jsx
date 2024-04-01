import {
	HiOutlineViewGrid,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'search',
		label: 'Search',
		path: '/home',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'History',
		path: '/',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'customers',
		label: 'Starred',
		path: '/',
		icon: <HiOutlineUsers />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
