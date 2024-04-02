import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import LogoNavLight from "../LogoNavLight";
import logo from "../logo.svg";
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { logout_user } from '../../services/api/auth'

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	const navigate = useNavigate(); // Initialize useNavigate hook
	let token = Cookies.get('token')

	const handleLogout = async (e) => {
		e.preventDefault();
		logout_user(token)
		token = ''
		Cookies.set("token", token); // Example: set cookie to expire in 7 days
		setTimeout(() => {
			navigate('/'); // Use navigate to redirect
		}, 1000);
	};
	return (
		<div className="bg-neutral-900 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-4">
				<LogoNavLight logo={logo} />
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<button onClick={handleLogout}>
					<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
						<span className="text-xl">
							<HiOutlineLogout />
						</span>
						Logout
					</div>
				</button>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
