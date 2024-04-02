import React, { useEffect } from 'react'
import RecentOrders from '../components/RecentOrders'
import { NO_DATA, SAMPLEDATA, STRUCTURE } from '../lib/constants'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useDrug } from '../services/providers/DrugContext';

export default function Dashboard() {
	const navigate = useNavigate(); // Initialize useNavigate hook
	const token = Cookies.get('token')
	const { drugData, updateDrugData } = useDrug();

	const apiResponse2 = [{ "Item Number \u2013 8 digit": 10265607, "NDC Number": "00406622105", "Size Qty": "500     ", "Retail Pack Quantity": 1, "AWP Price": 9000, "Acquisition Price": 5103, "Retail Price": 0, "WAC Price": 5526, "Contract Flag": "N", "Generic Name": "methadone", "Form": "HCl ORAL SOLUTION 10", "Name": "METHADONE HCL", "Size": "10MG\/5ML SOL 500", "True Similarity": 0.6130625008, "%": null, "MCG": null, "M": null, "IU": null, "MEQ": null, "UN": null, "HR": null, "MMOL": null, "BP": null, "CAL": null, "USP": null, "MU": null, "Total_MG": 10.0, "Total_ML": 5.0, "Total_MM": null, "Basic Form": "Other\/Undefined", "Average Price": 6493.86 }, { "Item Number \u2013 8 digit": 10083467, "NDC Number": "66689071216", "Size Qty": "500     ", "Retail Pack Quantity": 1, "AWP Price": 31500, "Acquisition Price": 5510, "Retail Price": 0, "WAC Price": 21000, "Contract Flag": "C", "Generic Name": "methadone", "Form": "HCl ORAL SOLUTION 10", "Name": "METHADONE HCL", "Size": "10 MG\/5 ML SOL 5", "True Similarity": 1.0, "%": null, "MCG": null, "M": null, "IU": null, "MEQ": null, "UN": null, "HR": null, "MMOL": null, "BP": null, "CAL": null, "USP": null, "MU": null, "Total_MG": 10.0, "Total_ML": 5.0, "Total_MM": null, "Basic Form": "Other\/Undefined", "Average Price": 19093.4 }]

	function formatJSON(jsonString) {
		try {
			const jsonArray = JSON.parse(jsonString);
			const formattedArray = jsonArray.map(item => {
				const formattedItem = {};
				for (const key in item) {
					formattedItem[key.trim()] = item[key];
				}
				return formattedItem;
			});
			return formattedArray;
		} catch (error) {
			console.error('Error formatting JSON:', error);
			return null;
		}
	}

	const formattedDrugData = formatJSON(drugData)
	console.log('NEWWWW DRUG DATAAA: ', formattedDrugData)

	const restructureApiResponse = (apiResponse) => {
		return apiResponse.map(item => ({
			itemNumber: item["Item Number – 8 digit"] || '',
			ndcNumber: item["NDC Number"] || '',
			sizeQty: item["Size Qty"].trim() || '',
			retailPackQuantity: item["Retail Pack Quantity"] || '',
			awpPrice: item["AWP Price"] || '',
			acquisitionPrice: item["Acquisition Price"] || '',
			retailPrice: item["Retail Price"] || '',
			wacPrice: item["WAC Price"] || '',
			contractFlag: item["Contract Flag"] || '',
			genericName: item["Generic Name"] || '',
			form: item["Form"] || '',
			size: item["Size"] || '',
			trueSimilarity: item["True Similarity"] || '',
			percentage: item["%"] || '',
			mcg: item["MCG"] || '',
			m: item["M"] || '',
			iu: item["IU"] || '',
			meq: item["MEQ"] || '',
			un: item["UN"] || '',
			hr: item["HR"] || '',
			mmol: item["MMOL"] || '',
			bp: item["BP"] || '',
			cal: item["CAL"] || '',
			usp: item["USP"] || '',
			mu: item["MU"] || '',
			totalMg: item["Total_MG"] || '',
			totalMl: item["Total_ML"] || '',
			totalMm: item["Total_MM"] || '',
			basicForm: item["Basic Form"] || '',
			averagePrice: item["Average Price"] || ''
		}));
	};

	let RESULTS;

	if (!drugData){
		// RESULTS = restructureApiResponse(apiResponse2);
		RESULTS = NO_DATA;
		console.log('NO DATA RECEIVED YET')
	} else {
		RESULTS = restructureApiResponse(formattedDrugData);
	}

	useEffect(() => {
		if (!token) {
			navigate('/')
		}
	}, [])

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 w-full h-screen">
				<RecentOrders data={RESULTS} />
			</div>
		</div>
	)
}
