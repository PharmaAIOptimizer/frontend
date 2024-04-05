import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from '../../services/providers/HistoryContext';
import { useSearch } from '../../services/providers/SearchContext';
import Cookies from 'js-cookie';
import { remove_favorites } from '../../services/api/history';

export default function FavoritedTable({ data }) {
	const token = Cookies.get('token')
	const { updateFavoriteData, updateFavoriteID } = useHistory();
	const { updateSearchData } = useSearch();
	const [currentPage, setCurrentPage] = useState(1);
	const resultsPerPage = 15;

	// data = [...data].reverse() // reversed to display most recent to oldest data

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

	async function handleDeleteResult(orderID) {
		try {
			const params = {
				session_cookie: token,
				history_id: orderID
			};
			await remove_favorites(params);
			alert('Your saved result is now deleted');

		} catch (error) {
			console.error("Error fetching and processing history:", error);
			// Handle the error appropriately, perhaps setting an error state
		}
	}

	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Showing favorited searches</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Drug Item Number</th>
							<th>340B</th>
							<th>GPO</th>
							<th>WAC</th>
							<th>Multiple?</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{currentData.map((order, index) => (
							<tr key={index}>
								{updateFavoriteData(order.results)}
								{updateSearchData(order.itemNumber)}
								{updateFavoriteID(order.id)}
								<td>
									<Link to={`/favorite-results`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/favorite-results`}>{order.itemNumber}</Link>
								</td>
								<td>{order.w3}</td>
								<td>{order.w2}</td>
								<td>{order.w1}</td>
								<td>{order.isMultiple}</td>
								<td>
									<div className='font-bold text-red-800'>
										{/* <button onClick={handleDeleteResult()}>Delete</button> */}
										<button onClick={`#`}>Delete</button>
									</div>
								</td>
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
		</div >
	);
}
