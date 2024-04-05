import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../shared/Sidebar'
import HeaderHistory from './HeaderHistory'

export default function LayoutHistory() {
	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-1">
				<HeaderHistory />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
