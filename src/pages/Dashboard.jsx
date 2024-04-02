import React, { useEffect } from 'react'
import RecentOrders from '../components/RecentOrders'
import { NO_DATA } from '../lib/constants'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
	const navigate = useNavigate(); // Initialize useNavigate hook
	const token = Cookies.get('token')

	useEffect(() => {
		if (!token) {
			navigate('/')
		}
	}, [])
	
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<RecentOrders data={NO_DATA} />
			</div>
		</div>
	)
}
