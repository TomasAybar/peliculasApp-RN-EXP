import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { MoviePoster } from './MoviePoster'
import { Movie } from '../interfaces/movieInterface'

interface Props {
	title?: string
	movies: Movie[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {
	return (
		<View
			style={{
				height: title ? 260 : 220,
			}}
		>
			{title && (
				<Text
					style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}
				>
					{title}
				</Text>
			)}

			<FlatList
				data={movies}
				renderItem={({ item }: any) => (
					<MoviePoster movie={item} width={200} height={140} />
				)}
				keyExtractor={(item) => item.id.toString()}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}
