import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
    background-image: url(${props => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    max-width: 1500px;

    @media(max-width: 425px) {
       display: flex;
       flex-direction: column;
    } 
`
export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #FFFFFF;
    }
    p {
        font-size: 20px;
        font-weight: 500;
        color: #FFFFFF;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    @media(max-width: 768px) {
        h1 {
            font-size: 4rem;
            margin-top: 30px;
        }

        p {
            line-height: 30px;
        }
    }   

    @media(max-width: 425px) {
        
    }

    @media(max-width: 425px) {
        width: 90%;
        text-align: center;
        /* margin-top: 50px; */

        h1 {
            font-size: 40px;
            margin-top: 245px;
        }
    }
`
export const Poster = styled.div`
    z-index: 2;

    img {
        width: 400px;
        border-radius: 30px;
        animation: ${scale} 0.5s linear;
    }

    @media(max-width: 768px) {
        margin-right: 10px;
    }

    @media(max-width: 425px) {
        img {
            display: none;
        }
    }
`
export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;   

    @media(max-width: 425px) {
        flex-direction: column;
    }
`