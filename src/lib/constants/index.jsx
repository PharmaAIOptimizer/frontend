import {
	HiOutlineViewGrid,
	HiOutlineDocumentText,
	HiOutlineQuestionMarkCircle,
	HiOutlineStar,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'search',
		label: 'Search',
		path: '/home',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'history',
		label: 'History',
		path: '/history',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'favorited',
		label: 'Favorited',
		path: '/favorited',
		icon: <HiOutlineStar />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	// {
	// 	key: 'settings',
	// 	label: 'Settings',
	// 	path: '/settings',
	// 	icon: <HiOutlineCog />
	// },
	{
		key: 'help',
		label: 'Help & Support',
		path: '/help',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

export const NO_HISTORY = [
	{
		id: '1',
		generic_name: 'Acetaminophen',
		ndc_number: '12345678',
		w1: '33%',
		w2: '33%',
		w3: '34%',
	}
]

export const SAMPLE_HISTORY = [
	{
		id: '1',
		generic_name: 'Acetaminophen',
		ndc_number: '12345678',
		w1: '33%',
		w2: '33%',
		w3: '34%',
	},
	{
		id: '2',
		generic_name: 'Acetaminophen',
		ndc_number: '12345678',
		w1: '33%',
		w2: '33%',
		w3: '34%',
	},
	{
		id: '3',
		generic_name: 'Acetaminophen',
		ndc_number: '12345678',
		w1: '33%',
		w2: '33%',
		w3: '34%',
	}
]

// export const STRUCTURE = [
// 	{
// 		itemNumber: '',
// 		ndcNumber: '',
// 		sizeQty: '',
// 		retailPackQuantity: '',
// 		awpPrice: '',
// 		acquisitionPrice: '',
// 		retailPrice: '',
// 		wacPrice: '',
// 		contractFlag: '',
// 		genericName: '',
// 		form: '',
// 		size: '',
// 		trueSimilarity: '',
// 		percentage: '',
// 		mcg: '',
// 		m: '',
// 		iu: '',
// 		meq: '',
// 		un: '',
// 		hr: '',
// 		mmol: '',
// 		bp: '',
// 		cal: '',
// 		usp: '',
// 		mu: '',
// 		totalMg: '',
// 		totalMl: '',
// 		totalMm: '',
// 		basicForm: '',
// 		averagePrice: '',
// 	}
// ]

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


export const NO_DATA = [
	{
		item_number: '',
		ndc_number: '',
		size_qty: '',
		retail_pack_quantity: '',
		awp_price: '',
		acquisition_price: '',
		retail_price: '',
		wac_price: '',
		contract_flag: '',
		generic_name: '',
		hr: '',
		mmol: '',
		bp: '',
		cal: '',
		usp: '',
		mu: '',
		total_mg: '',
		total_ml: '',
		total_mm: '',
		basic_form: ''
	}
]

export const SAMPLEDATA = [
	{
		item_number: '12345678',
		ndc_number: '87654321',
		size_qty: '10',
		retail_pack_quantity: '2',
		awp_price: '$50.00',
		acquisition_price: '$40.00',
		retail_price: '$60.00',
		wac_price: '$45.00',
		contract_flag: 'Y',
		generic_name: 'Acetaminophen',
		hr: '24',
		mmol: '0.8',
		bp: '120/80',
		cal: '500',
		usp: 'Standard',
		mu: '1000',
		total_mg: '500',
		total_ml: '250',
		total_mm: '150',
		basic_form: 'Tablet'
	},
	{
		item_number: '12345678',
		ndc_number: '87654321',
		size_qty: '10',
		retail_pack_quantity: '2',
		awp_price: '$50.00',
		acquisition_price: '$40.00',
		retail_price: '$60.00',
		wac_price: '$45.00',
		contract_flag: 'Y',
		generic_name: 'Acetaminophen',
		hr: '24',
		mmol: '0.8',
		bp: '120/80',
		cal: '500',
		usp: 'Standard',
		mu: '1000',
		total_mg: '500',
		total_ml: '250',
		total_mm: '150',
		basic_form: 'Tablet'
	},
	{
		item_number: '12345678',
		ndc_number: '87654321',
		size_qty: '10',
		retail_pack_quantity: '2',
		awp_price: '$50.00',
		acquisition_price: '$40.00',
		retail_price: '$60.00',
		wac_price: '$45.00',
		contract_flag: 'Y',
		generic_name: 'Acetaminophen',
		hr: '24',
		mmol: '0.8',
		bp: '120/80',
		cal: '500',
		usp: 'Standard',
		mu: '1000',
		total_mg: '500',
		total_ml: '250',
		total_mm: '150',
		basic_form: 'Tablet'
	},
	{
		item_number: '12345678',
		ndc_number: '87654321',
		size_qty: '10',
		retail_pack_quantity: '2',
		awp_price: '$50.00',
		acquisition_price: '$40.00',
		retail_price: '$60.00',
		wac_price: '$45.00',
		contract_flag: 'Y',
		generic_name: 'Acetaminophen',
		hr: '24',
		mmol: '0.8',
		bp: '120/80',
		cal: '500',
		usp: 'Standard',
		mu: '1000',
		total_mg: '500',
		total_ml: '250',
		total_mm: '150',
		basic_form: 'Tablet'
	},
	{
		item_number: '12345678',
		ndc_number: '87654321',
		size_qty: '10',
		retail_pack_quantity: '2',
		awp_price: '$50.00',
		acquisition_price: '$40.00',
		retail_price: '$60.00',
		wac_price: '$45.00',
		contract_flag: 'Y',
		generic_name: 'Acetaminophen',
		hr: '24',
		mmol: '0.8',
		bp: '120/80',
		cal: '500',
		usp: 'Standard',
		mu: '1000',
		total_mg: '500',
		total_ml: '250',
		total_mm: '150',
		basic_form: 'Tablet'
	},
]
