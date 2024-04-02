import FavoritedTable from '../components/FavoritedTable'
import { SAMPLE_HISTORY } from '../lib/constants'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

export default function Favorited() {
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
				<FavoritedTable data={SAMPLE_HISTORY} />
			</div>
		</div>
	)
}