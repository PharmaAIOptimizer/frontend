const BASE = process.env.REACT_APP_BASE;

export const get_history = async (params) => {
    try {
        const res = await fetch(`${BASE}/history/get`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(params),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in replacing drugs (service) => ', error);
        return error.message
    }
};

export const get_favorites = async (params) => {
    try {
        const res = await fetch(`${BASE}/history/get_favorites`, {
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

export const add_favorites = async (params) => {
    try {
        const res = await fetch(`${BASE}/history/add_to_favorites`, {
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

export const remove_favorites = async (params) => {
    try {
        const res = await fetch(`${BASE}/history/remove_from_favorites`, {
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