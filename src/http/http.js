import md5 from 'md5'
const BASE_URL = 'http://api.valantis.store:40000/'

const http = async (body = {}) => {
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const authString = md5(`${import.meta.env.VITE_VLANTIS_API_PASSWORD}_${timestamp}`);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Auth': authString
        },
        body: JSON.stringify(body)
    }

    const response = await fetch(BASE_URL, requestOptions)

    if (response.status === 401) {
        throw new Error('Authorization failed')
    }

    return response.json()
}

export default http