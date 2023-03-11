import React, { useState, useEffect } from 'react'
import movieDB from '../api/movieDB'
import { Cast, CreditsResponse } from '../interfaces/creditsInteface'
import { MovieFull } from '../interfaces/movieInterface'

interface MovieDetail {
	isLoading: boolean
	movieFull?: MovieFull
	cast: Cast[]
}

export const useMovieDetails = (movieId: number) => {
	const [state, setState] = useState<MovieDetail>({
		isLoading: true,
		movieFull: undefined,
		cast: [],
	})

	const getMovieDetail = async () => {
		const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`)
		const castPromise = await movieDB.get<CreditsResponse>(
			`/${movieId}/credits`
		)

		const [movieDetailRes, castPromiseRes] = await Promise.all([
			movieDetailPromise,
			castPromise,
		])

		setState({
			isLoading: false,
			movieFull: movieDetailRes.data,
			cast: castPromiseRes.data.cast,
		})
	}

	useEffect(() => {
		getMovieDetail()
	}, [])

	return {
		...state,
	}
}
