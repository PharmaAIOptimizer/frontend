import React from 'react'
import { Link } from 'react-router-dom'

export default function HistoryTable({ data }) {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Showing favorited searches</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Drug NDC Number</th>
							<th>Drug Generic Name</th>
							<th>340B</th>
							<th>GPO</th>
							<th>WAC</th>
						</tr>
					</thead>
					<tbody>
						{data.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`#`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`#`}>{order.ndc_number}</Link>
								</td>
								<td>{order.generic_name}</td>
								<td>{order.w1}</td>
								<td>{order.w2}</td>
								<td>{order.w3}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
