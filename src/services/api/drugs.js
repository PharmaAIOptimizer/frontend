const BASE = process.env.REACT_APP_BASE;

export const replace_drug = async (params) => {
    try {
        const res = await fetch(`${BASE}/drugs/replacements`, {
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

export const upload2 = async (file) => {
    const formData = new FormData();
    formData.append('file', file); // Add the file to FormData under the key 'file'

    try {
        console.log("will try uploading...")
        const res = await fetch(`${BASE}/snapshot/upload2`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json', // Explicitly accept JSON responses
            },
            body: formData, // The body should be the FormData containing the file
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json(); // Assuming the response will be JSON
        return data;
    } catch (error) {
        console.log('Error in uploading file (service) => ', error);
        return error.message;
    }
};



export const upload_csv = async (session_cookie, file) => {
    try {
        const res = await fetch(`${BASE}/snapshot/upload`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                session_cookie: session_cookie,
                file: file
            }),
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in uploading snapshot (service) => ', error);
        return error.message;
    }
};


// export const upload_csv = async (params) => {
//     try {
//         const res = await fetch(`${BASE}/snapshot/upload`, {
//             headers: {
//                 'Accept': 'application/json',
//             },
//             method: 'POST',
//             body: JSON.stringify(params),
//         });
//         const data = res.json();
//         return data;
//     } catch (error) {
//         console.log('API LOG Error in uploading csv (service) => ', error);
//         return error.message
//     }
// };