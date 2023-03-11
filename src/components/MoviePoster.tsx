import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
	movie: Movie
	height?: number
	width?: number
}

export const MoviePoster = ({ movie, height = 300, width = 420 }: Props) => {
	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

	const navigation = useNavigation()

	return (
		<TouchableOpacity
			activeOpacity={0.9}
			onPress={() =>
				navigation.navigate('DetailScreen' as never, movie as never)
			}
			style={{
				width: height,
				height: width,
				marginHorizontal: 2,
				paddingBottom: 20,
				paddingHorizontal: 7,
			}}
		>
			<View style={styles.imageContainer}>
				<Image source={{ uri }} style={styles.image} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		borderRadius: 18,
	},
	imageContainer: {
		flex: 1,
		borderRadius: 18,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 9,
	},
})
