import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import HistoryTable from '../components/HistoryTable'
import { NO_HISTORY, SAMPLE_HISTORY, SAMPLE_HISTORYAPI } from '../lib/constants'
import { useHistory } from '../services/providers/HistoryContext';

export const restructureApiResponse2 = (apiResponse) => {
	return apiResponse.map(item => ({
		results: item[6]
	}));
}

export default function History() {
	const navigate = useNavigate(); // Initialize useNavigate hook
	const token = Cookies.get('token')

	const { historyData, updateHistoryData } = useHistory();

	useEffect(() => {
		if (!token) {
			navigate('/')
		}
	}, [])

	const restructureApiResponse = (apiResponse) => {
		return apiResponse.map(item => ({
			itemNumber: item[0],
			w1: item[1],
			w2: item[2],
			w3: item[3],
			isMultiple: item[4] ? 'Yes' : 'No',
			timestamp: item[5],
			results: item[6]
		}));
	}
	
	const APIDATA = restructureApiResponse(SAMPLE_HISTORYAPI);
	
	// updateHistoryData(APIDATA)

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<HistoryTable data={APIDATA} />
			</div>
		</div>
	)
}

