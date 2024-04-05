export function formatJSON(jsonString) {
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

export const restructureApiResponse = (apiResponse) => {
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

export const restructureHistoryApiResponse = (apiResponse) => {
    return apiResponse.map(item => ({
        itemNumber: item[0],
        w1: item[1],
        w2: item[2],
        w3: item[3],
        isMultiple: item[4] ? 'Yes' : 'No',
        timestamp: item[5],
        results: item[6]
    }));
}