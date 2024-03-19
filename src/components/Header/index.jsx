import { Link, useLocation } from 'react-router-dom'
import { Container, Ul, Li } from './styles'
import Logo from '../../assets/logo1.png'
import { useState } from 'react'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [changeBackground, setChangeBackground] = useState(false);
    const {pathname} = useLocation();

    window.onscroll = () => {
        if(!changeBackground && window.scrollY > 150) {
            setChangeBackground(true)
        }
        if(changeBackground && window.scrollY <= 150) {
            setChangeBackground(false)
        }
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (        
        <Container changeBackground={changeBackground}>
            <img src={Logo} alt="logo-movies" />
            <div onClick={toggleMenu} className='menuMobile'>
                <div className='mm_line'></div>
                <div className='mm_line'></div>
                <div className='mm_line'></div>
            </div>
            <Ul>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}>
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Ul>            
        </Container>
    )
}

export default Header