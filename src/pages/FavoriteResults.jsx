import React, { useEffect } from 'react'
import RecentOrders from '../components/RecentOrders'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { restructureApiResponse } from '../services/functions';
import { useHistory } from '../services/providers/HistoryContext';


export default function FavoriteResults() {
	const navigate = useNavigate(); // Initialize useNavigate hook
	const token = Cookies.get('token')

	useEffect(() => {
		if (!token) {
			navigate('/')
		}
	})

	const { favoriteData } = useHistory();

	const favoriteResults = restructureApiResponse(favoriteData)
	console.log(favoriteResults)

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<RecentOrders data={favoriteResults} />
			</div>
		</div>
	)
}
