export const replace_drug = async (params) => {
    try {
        console.log('PARAMS: ', params)
        const res = await fetch('http://100.26.146.163/drugs/replacements', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(params),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in replacing drugs (service) => ', error);
        return error.message
    }
};