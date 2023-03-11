import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	ScrollView,
	ActivityIndicator,
	TouchableOpacity,
} from 'react-native'
import { RootStackParams } from '../navigation/Navigation'

import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'
import { Ionicons } from '@expo/vector-icons'

const screenHeigth = Dimensions.get('screen').height

interface Props
	extends NativeStackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route, navigation }: Props) => {
	const movie = route.params

	const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

	const { isLoading, cast, movieFull } = useMovieDetails(movie.id)

	return (
		<ScrollView>
			<View style={styles.imageContainer}>
				<View style={styles.imageBorder}>
					<Image source={{ uri }} style={styles.posterImage} />
				</View>
			</View>

			<View style={styles.marginContainer}>
				<Text style={styles.subTitle}>{movie.original_title}</Text>
				<Text style={styles.title}>{movie.title}</Text>
			</View>

			{isLoading ? (
				<ActivityIndicator
					size={35}
					color={'grey'}
					style={{ marginTop: 20 }}
				/>
			) : (
				<MovieDetails movieFull={movieFull} cast={cast} />
			)}

			{/* Boton cerrar */}
			<TouchableOpacity
				style={styles.backButtom}
				onPress={() => navigation.pop()}
			>
				<Ionicons name='arrow-back-outline' size={60} color='white' />
			</TouchableOpacity>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: screenHeigth * 0.7, // 70%

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 9,
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,
	},
	posterImage: {
		flex: 1,
	},
	imageBorder: {
		flex: 1,
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,
		overflow: 'hidden',
	},
	marginContainer: {
		marginHorizontal: 20,
		marginTop: 20,
	},
	subTitle: {
		fontSize: 16,
		opacity: 0.8,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	backButtom: {
		position: 'absolute',
		zIndex: 999,
		elevation: 9,
		top: 30,
		left: 5,
	},
})
