import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100px;
    z-index: 99;
    position: fixed;
    top: 0;
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${props => props.changeBackground ? '#e0df79' : 'transparent'};
    transition: background-color 0.6s ease-in-out;

    img {
        width: 25%;
    }

    .menuMobile {
        display: none;
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
    .mm_line {
        height: 3px;
        background-color: #FFF;
    }

    @media(max-width: 768px) {
        
        img {
            width: 20%;            
        }
    }

    @media(max-width: 425px) {
       .menuMobile {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
       } 
       img {
        width: 230px;
    }
    }
`
export const Ul = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;   

    @media(max-width: 425px) {
        display: none;
        flex-direction: column;
        gap: 20px;
        position: absolute;
        margin-top: 150px;
        right: 30px;          
    }
`
export const Li = styled.li`
    font-weight: 600;
    font-size: 28px;
    position: relative;
    cursor: pointer;

    a {
        text-decoration: none;
        color: #FFFFFF;
    }

    &::after {
        content: '';
        height: 3px;
        width: ${props => props.isActive ? '100%' : 0};
        background-color: #2D895D;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }

    @media(max-width: 768px) {
        font-size: 25px;
    }
    @media(max-width: 425px) {
        font-size: 18px;
    }
`