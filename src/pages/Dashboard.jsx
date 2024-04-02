import React from 'react'
import RecentOrders from '../components/RecentOrders'
import { NO_DATA } from '../lib/constants'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<RecentOrders data={NO_DATA} />
			</div>
		</div>
	)
}
