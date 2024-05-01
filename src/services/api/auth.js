const BASE = process.env.REACT_APP_BASE;

export const create_user = async (params) => {
    try {
        const res = await fetch(`${BASE}/user/create`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(params),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in create_user (service) => ', error);
        return error.message
    }
};

export const login_user = async (params) => {
    try {
        const res = await fetch(`${BASE}/session/login`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(params),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in login_user (service) => ', error);
        return error.message
    }
};

export const logout_user = async (params) => {
    try {
        const res = await fetch(`${BASE}/session/logout`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(params),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in logout_user (service) => ', error);
        return error.message
    }
};

// 
// 
// 
// 

export const delete_user = async (params) => {
    try {
        const res = await fetch(`${BASE}/user/delete`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
            body: JSON.stringify(params),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in delete_user (service) => ', error);
        return error.message
    }
};

export const validate_cookie = async (params) => {
    try {
        const res = await fetch(`${BASE}/session/is_session_cookie_valid`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(params),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in validate_cookie (service) => ', error);
        return error.message
    }
};

