import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Background, Container, Info, Poster, ContainerButtons } from './styles'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'
import { getMovies, getTopMovies, getTopSeries, getPopularSeries, getTopPeople } from '../../services/getData'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        const getAllData = () => {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()
            ])
            .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
                setMovie(movie)
                setTopMovies(topMovies)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setTopPeople(topPeople)
            })
            .catch((error) => console.error(error))
        }
        getAllData()

    }, [])    

    return (
        <>
            {movie &&
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>                            
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>                
            }
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
        </>
    )
}

export default Home