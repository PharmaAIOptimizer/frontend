import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import HistoryTable from '../components/HistoryTable'
import { SAMPLE_HISTORY } from '../lib/constants'

export default function History() {
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
				<HistoryTable data={SAMPLE_HISTORY} />
			</div>
		</div>
	)
}

