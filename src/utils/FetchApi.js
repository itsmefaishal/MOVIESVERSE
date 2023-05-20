import axios from 'axios'

const API_KEY = import.meta.env.VITE_APP_OMDB_KEY;

const ombdUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&`

const fetchData = async (query) => {
    try{
        const data = await axios.get(ombdUrl + query)
        .then(json => {
            // console.log (json)
            json
        })
        return data
    }
    catch(error) {
        console.log(error)
        return error
    }
    
}

export default fetchData;