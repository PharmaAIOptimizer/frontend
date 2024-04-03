import React from 'react'
import { Link } from 'react-router-dom'
import { useDrug } from '../services/providers/DrugContext'
import { useSearch } from '../services/providers/SearchContext';

export default function RecentOrders({ data }) {
	const { drugData, updateDrugData } = useDrug();
	const { searchData, updateSearchData } = useSearch();


	// Determine columns to hide based on empty values across all rows
	const columnsToHide = data.reduce((acc, order) => {
		Object.entries(order).forEach(([key, value]) => {
		  if (value === '' || value == null) {
			acc.add(key);
		  }
		});
		return acc;
	  }, new Set());

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
			<strong className="text-gray-700 font-medium">Showing results for {searchData}</strong>
			<div className='text-right font-bold text-green-800'>
				<button>Save results</button></div>

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
            {data.map((order, index) => (
              <tr key={index}>
                {headers.map(header => 
                  !columnsToHide.has(header.prop) && <td key={`${header.prop}-${index}`}>{order[header.prop]}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
		</div>
	)
}
