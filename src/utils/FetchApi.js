import axios from 'axios'

const API_KEY = import.meta.env.VITE_APP_OMDB_KEY;

const ombdUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&`

const fetchData = async (query) => {
    try{
        const response = await axios.get(`${ombdUrl}s=${query}`)
        const data = await response.data;
        return data
    }
    catch(error) {
        console.log(error)
        return error
    }
    
}

export default fetchData;