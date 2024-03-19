import { useEffect, useState } from 'react'
import {Container, Background} from './styles'
import { getMovieVideos } from '../../services/getData'

const Modal = ({ movieId, setShowModal }) => {
    const [movie, setMovie] = useState()

    useEffect(() => {
        const getMovies = async () => {
            setMovie(await getMovieVideos(movieId))
        }
        getMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && ( 
                <Container>
                    <iframe src={`https://www.youtube.com/embed/${movie[0].key}`} title='Youtube Video Player' width='100%' height='500px'></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal