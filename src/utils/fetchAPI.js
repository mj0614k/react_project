import axios from 'axios'

const BASE_URL = 'https://api.nasa.gov'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'api_key': process.env.REACT_APP_NASA_API_KEY,
    // 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}