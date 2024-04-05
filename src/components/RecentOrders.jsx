import React, { useState } from 'react';

import { useSearch } from '../services/providers/SearchContext';
import { useHistory } from '../services/providers/HistoryContext';
import Cookies from 'js-cookie';
import { add_favorites } from '../services/api/history';

export default function RecentOrders({ data }) {
	const { searchData } = useSearch();
	const { favoriteID } = useHistory();
	const [currentPage, setCurrentPage] = useState(1);
	const resultsPerPage = 10;

	const token = Cookies.get('token')

	// Reverse the data array before calculating the slice for the current page
	// const reversedData = [...data].reverse(); // Create a copy and reverse it to avoid mutating the original data prop

	// Calculate the current data slice
	const indexOfLastResult = currentPage * resultsPerPage;
	const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	const currentData = data.slice(indexOfFirstResult, indexOfLastResult);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// Calculate the total number of pages
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(data.length / resultsPerPage); i++) {
		pageNumbers.push(i);
	}


	// Determine columns to hide based on empty values across all rows
	const columnsToHide = data.reduce((acc, order) => {
		Object.entries(order).forEach(([key, value]) => {
			if (value === '' || value == null) {
				acc.add(key);
			}
		});
		return acc;
	}, new Set());

	async function handleSaveResults() {
		try {
			const params = {
				session_cookie: token,
				history_id: favoriteID
			};
			await add_favorites(params);
			alert('Your results have been saved');

		} catch (error) {
			console.error("Error fetching and processing history:", error);
			// Handle the error appropriately, perhaps setting an error state
		}
	}

	const headers = [
		{ label: "Item Number", prop: "itemNumber" },
		{ label: "NDC Number", prop: "ndcNumber" },
		{ label: "Size Qty", prop: "sizeQty" },
		{ label: "Retail Pack Quantity", prop: "retailPackQuantity" },
		{ label: "340B Price", prop: "awpPrice" },
		{ label: "GPO Price", prop: "acquisitionPrice" },
		{ label: "Retail Price", prop: "retailPrice" },
		{ label: "WAC Price", prop: "wacPrice" },
		{ label: "Contract Flag", prop: "contractFlag" },
		{ label: "Generic Name", prop: "genericName" },
		{ label: "Form", prop: "form" },
		{ label: "Size", prop: "size" },
		{ label: "True Similarity", prop: "trueSimilarity" },
		{ label: "%", prop: "percentage" },
		{ label: "MCG", prop: "mcg" },
		{ label: "M", prop: "m" },
		{ label: "IU", prop: "iu" },
		{ label: "MEQ", prop: "meq" },
		{ label: "UN", prop: "un" },
		{ label: "HR", prop: "hr" },
		{ label: "MMOL", prop: "mmol" },
		{ label: "BP", prop: "bp" },
		{ label: "CAL", prop: "cal" },
		{ label: "USP", prop: "usp" },
		{ label: "MU", prop: "mu" },
		{ label: "Total_MG", prop: "totalMg" },
		{ label: "Total_ML", prop: "totalMl" },
		{ label: "Total_MM", prop: "totalMm" },
		{ label: "Basic Form", prop: "basicForm" },
		{ label: "Average Price", prop: "averagePrice" },
	];

	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Showing results for #{searchData}</strong>
			<div className='text-right font-bold text-green-800'>
				<button onClick={handleSaveResults}>Save results</button></div>

			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							{headers.map(header =>
								!columnsToHide.has(header.prop) && <th key={header.prop}>{header.label}</th>
							)}
						</tr>
					</thead>
					<tbody>
						{currentData.map((order, index) => (
							<tr key={index}>
								{headers.map(header =>
									!columnsToHide.has(header.prop) && <td key={`${header.prop}-${index}`}>{order[header.prop]}</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<nav className="mt-7">
				<ul className="flex justify-center">
					{pageNumbers.map(number => (
						<li key={number} className="mx-1">
							<button
								onClick={() => paginate(number)}
								className={`px-4 py-2 text-sm font-medium rounded hover:bg-blue-700 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
							>
								{number}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
