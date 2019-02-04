import fetchJsonp from 'fetch-jsonp'

const API = 'https://api.deezer.com';

export default {
    search(search, order) {
        return fetchJsonp(`${API}/search?q=${search}&order=${order}&output=jsonp`)
            .then(response => response.json())
            .then(response => {
                if(response.error === 1) {
                    return Promise.reject(response)
                } else {
                    return Promise.resolve(response)
                }
            })
    }
}