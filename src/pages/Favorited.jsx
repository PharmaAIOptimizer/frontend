import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { get_favorites } from '../services/api/history';
import FavoritedTable from '../components/favorited/FavoritedTable';

export default function Favorited() {
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const [favoriteData, setFavoriteData] = useState([]);

    useEffect(() => {
        if (!token) {
            navigate('/');
        } else {
            fetchAndProcessFavorites();
        }
    });

    const favoriteResultsAPI = (apiResponse) => {
        try {
            return apiResponse.map(item => ({
                id: item[0],
                itemNumber: item[1],
                w1: item[2],
                w2: item[3],
                w3: item[4],
                isMultiple: item[5] ? 'Yes' : 'No',
                timestamp: item[6],
                results: item[7],
            }));
        } catch (error) {
            console.error("An error occurred while processing the API response:", error);
            return [];
        }
    };

    async function fetchAndProcessFavorites() {
        try {
            const favoriteParams = { session_cookie: token };
            const apiResponse = await get_favorites(favoriteParams);
            const processedData = favoriteResultsAPI(apiResponse);
            setFavoriteData(processedData);
        } catch (error) {
            console.error("Error fetching and processing history:", error);
            // Handle the error appropriately, perhaps setting an error state
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 w-full h-screen">
                <FavoritedTable data={favoriteData} />
            </div>
        </div>
    );
}
