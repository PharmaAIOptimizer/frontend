import React, { useEffect } from 'react'
import RecentOrders from '../components/RecentOrders'
import { NO_DATA, SAMPLEDATA, STRUCTURE } from '../lib/constants'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useDrug } from '../services/providers/DrugContext';
import { formatJSON, restructureApiResponse } from '../services/functions';

export default function Dashboard() {
	const navigate = useNavigate(); // Initialize useNavigate hook
	const token = Cookies.get('token')
	const { drugData } = useDrug();

	useEffect(() => {
		if (!token) {
			navigate('/')
		}
	}, [])

	const formattedDrugData = formatJSON(drugData)

	let RESULTS;

	if (!drugData){
		RESULTS = NO_DATA;
	} else {
		RESULTS = restructureApiResponse(formattedDrugData);
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<RecentOrders data={RESULTS} />
			</div>
		</div>
	)
}
