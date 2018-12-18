import { BITBOOK_API_BASE_URL } from '../shared/constants';

const headers = {
    'Content-Type': 'application/json',
    'Key': 'bitbookdev',
    'SessionId': sessionStorage.getItem('sessionId')
}

class ApiService {
    get(queryString) {
        const option = {
            method: 'GET',
            headers
        }
        return fetch(`${BITBOOK_API_BASE_URL}/${queryString}`, option)
            .then((response) => response.json())
    }
    post(queryString, inputData) {
        const option = {
            method: 'POST',
            headers,
            body: JSON.stringify(inputData)
        }
        return fetch(`${BITBOOK_API_BASE_URL}/${queryString}`, option)
            .then((response) => response.json())
    }
    delete(queryString) {
        const option = {
            method: 'DELETE',
            headers
        }
        return fetch(`${BITBOOK_API_BASE_URL}/${queryString}`, option)
    }
    put(inputData) {
        const option = {
            method: 'PUT',
            headers,
            body: JSON.stringify(inputData)
        }
        return fetch(`${BITBOOK_API_BASE_URL}/profiles`, option)
    }
    upload(file) {
        var formData = new FormData();
        formData.append('file', file);

        const option = {
            method: 'POST',
            headers: {
                'Key': 'bitbookdev',
                'SessionId': sessionStorage.getItem('sessionId'),
                'mimeType': "multipart/form-data"
            },
            body: formData
        }
        return fetch(`${BITBOOK_API_BASE_URL}/upload`, option)
    }
    authSystem(queryString, inputData) {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev'
            },
            body: JSON.stringify(inputData)
        }
        return fetch(`${BITBOOK_API_BASE_URL}/${queryString}`, option)
            .then((response) => response.json())
    }
}
export const apiService = new ApiService();
