import React, { useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

export default function RecentOrders({ data }) {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Showing results for #87654321</strong>
			<div className='text-right font-bold text-green-800'><button>Upload CSV</button></div>
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
						</tr>
					</thead>
					<tbody>
						{data.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`#`}>#{order.item_number}</Link>
								</td>
								<td>
									<Link to={`#`}>#{order.ndc_number}</Link>
								</td>
								<td>{order.size_qty}</td>
								<td>{order.retail_pack_quantity}</td>
								<td>{order.awp_price}</td>
								<td>{order.acquisition_price}</td>
								<td>{order.retail_price}</td>
								<td>{order.wac_price}</td>
								<td>{order.contract_flag}</td>
								<td>{order.generic_name}</td>
								<td>{order.hr}</td>
								<td>{order.mmol}</td>
								<td>{order.bp}</td>
								<td>{order.cal}</td>
								<td>{order.usp}</td>
								<td>{order.mu}</td>
								<td>{order.total_mg}</td>
								<td>{order.total_ml}</td>
								<td>{order.total_mm}</td>
								<td>{order.basic_form}</td>

							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
