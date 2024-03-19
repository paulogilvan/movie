import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'c55ff55c4dd6af9ce052265134cbd904',
        language: 'pt-BR',
        page: 1
    }
})

export default api