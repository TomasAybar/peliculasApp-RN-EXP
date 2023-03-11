import axios from 'axios'

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	params: {
		api_key: 'da105d94ec008192c58e8fcad8b05171',
		language: 'es-ES',
	},
})

export default movieDB
