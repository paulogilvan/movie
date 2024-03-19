import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Background, Container, ContainerMovies, Cover, Info } from './styles'
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'
import Slider from '../../components/Slider'

const Detail = () => {    
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    const { id } = useParams()

    useEffect(() => {
        const getAllData = () => {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
            .then(([movie, videos, credits, similar]) => {
                setMovie(movie)
                setMovieVideos(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)
            })
            .catch((error) => console.error(error))
        }
        getAllData()

    }, [])   

    return (
        <>
            {movie && ( 
            <>
                <Background image={getImages(movie.backdrop_path)} />
                <Container>
                    <Cover>
                        <img src={getImages(movie.poster_path)} alt="poster-filme" />
                    </Cover>
                    <Info>
                        <h2>{movie.title}</h2>
                        <SpanGenres genres={movie.genres} />
                        <p>{movie.overview}</p>
                        <div>
                            <Credits credits={movieCredits}/>
                        </div>
                    </Info>
                </Container>
                <ContainerMovies>
                {movieVideos &&
                    movieVideos.map((video) => (
                        <div key={video.id}>
                            <h4>{video.name}</h4>
                            <iframe src={`https://www.youtube.com/embed/${video.key}`} title='Youtube Video Player' width='100%' height='500px'></iframe>
                        </div>
                    ))
                }
                </ContainerMovies>
                {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'} />}
            </>
            )}
        </>
    )
}

export default Detail