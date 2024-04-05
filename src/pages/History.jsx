import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import HistoryTable from '../components/history/HistoryTable';
import { get_history } from '../services/api/history';

export default function History() {
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        if (!token) {
            navigate('/');
        } else {
            fetchAndProcessHistory();
        }
    }, [token, navigate]);

    async function fetchAndProcessHistory() {
        try {
            const historyParams = { session_cookie: token };
            const apiResponse = await get_history(historyParams);
            const processedData = historyResultsAPI(apiResponse);
            console.log('Processed API Data:', processedData);
            setHistoryData(processedData);
        } catch (error) {
            console.error("Error fetching and processing history:", error);
            // Handle the error appropriately, perhaps setting an error state
        }
    }

    const historyResultsAPI = (apiResponse) => {
        try {
            console.log(Array.isArray(apiResponse)); // Should log true if apiResponse is an array
            console.log('API Responseee:', apiResponse);

            return apiResponse.map(item => ({
                itemNumber: item[0],
                w1: item[1],
                w2: item[2],
                w3: item[3],
                isMultiple: item[4] ? 'Yes' : 'No',
                timestamp: item[5],
                results: item[6]
            }));
        } catch (error) {
            console.log("Error in mapping at: ", apiResponse);
            console.error("An error occurred while processing the API response:", error);
            // Return an empty array or error object based on your error handling strategy
            return [];
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 w-full h-screen">
                <HistoryTable data={historyData} />
            </div>
        </div>
    );
}
