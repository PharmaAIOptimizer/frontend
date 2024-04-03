export const register_user = async (formData) => {
    try {
        const res = await fetch('http://44.211.204.255/user/create', {
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
        const res = await fetch('https://44.211.204.255/session/login', {
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
        const res = await fetch('http://44.211.204.255/session/logout', {
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