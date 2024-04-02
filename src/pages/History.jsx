import React from 'react'
import RecentOrders from '../components/RecentOrders'
import { SAMPLEDATA } from '../lib/constants'


export default function History() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<RecentOrders data={SAMPLEDATA} />
			</div>
		</div>
	)
}
