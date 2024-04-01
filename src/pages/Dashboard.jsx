import React from 'react'
import RecentOrders from '../components/RecentOrders'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<RecentOrders />
			</div>
		</div>
	)
}
