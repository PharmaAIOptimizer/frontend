export const register_user = async (formData) => {
    try {
        const res = await fetch('https://api.papoai.net/user/create', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in register_user (service) => ', error);
        return error.message
    }
};

export const login_user = async (formData) => {
    try {
        const res = await fetch('https://api.papoai.net/session/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in login_user (service) => ', error);
        return error.message
    }
};

export const logout_user = async (formData) => {
    try {
        const res = await fetch('https://api.papoai.net/session/logout', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in logout_user (service) => ', error);
        return error.message
    }
};