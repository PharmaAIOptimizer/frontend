import React from 'react'
import { Link } from 'react-router-dom'
import { useDrug } from '../services/providers/DrugContext'

export default function RecentOrders({ data }) {
	const { drugData, updateDrugData } = useDrug();
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Showing results for #</strong>
			<div className='text-right font-bold text-green-800'>
				<button>Save results</button></div>

			<div>{drugData}</div>

			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>Item Number</th>
							<th>NDC Number</th>
							<th>Size Qty</th>
							<th>Retail Pack Quantity</th>
							<th>AWP Price</th>
							<th>Acquisition Price</th>
							<th>Retail Price</th>
							<th>WAC Price</th>
							<th>Contract Flag</th>
							<th>Generic Name</th>
							<th>Form</th>
							<th>Size</th>
							<th>True Similarity</th>
							<th>%</th>
							<th>MCG</th>
							<th>M</th>
							<th>IU</th>
							<th>MEQ</th>
							<th>UN</th>
							<th>HR</th>
							<th>MMOL</th>
							<th>BP</th>
							<th>CAL</th>
							<th>USP</th>
							<th>MU</th>
							<th>Total_MG</th>
							<th>Total_ML</th>
							<th>Total_MM</th>
							<th>Basic Form</th>
							<th>Average Price</th>
						</tr>
					</thead>
					<tbody>
						{data.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`#`}>#{order.itemNumber}</Link>
								</td>
								<td>
									<Link to={`#`}>#{order.ndcNumber}</Link>
								</td>
								<td>{order.sizeQty}</td>
								<td>{order.retailPackQuantity}</td>
								<td>{order.awpPrice}</td>
								<td>{order.acquisitionPrice}</td>
								<td>{order.retailPrice}</td>
								<td>{order.wacPrice}</td>
								<td>{order.contractFlag}</td>
								<td>{order.genericName}</td>
								<td>{order.form}</td>
								<td>{order.size}</td>
								<td>{order.trueSimilarity}</td>
								<td>{order.percentage}</td> {/* Assuming the property for "%" */}
								<td>{order.mcg}</td>
								<td>{order.m}</td>
								<td>{order.iu}</td>
								<td>{order.meq}</td>
								<td>{order.un}</td>
								<td>{order.hr}</td>
								<td>{order.mmol}</td>
								<td>{order.bp}</td>
								<td>{order.cal}</td>
								<td>{order.usp}</td>
								<td>{order.mu}</td>
								<td>{order.totalMg}</td>
								<td>{order.totalMl}</td>
								<td>{order.totalMm}</td>
								<td>{order.basicForm}</td>
								<td>{order.averagePrice}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
