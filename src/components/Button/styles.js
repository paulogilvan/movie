import styled, { css } from "styled-components"

const buttonStyles = css`
    background-color: transparent;
    border: 3px solid #FFFFFF;
    border-radius: 30px;
    color: #FFFFFF;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        color: #FF0000;
        background: #FFFFFF;
    }
`
export const ButtonRed = styled.button`
    ${buttonStyles}

    background: #FF0000;
    border: 4px silid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover {
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background: #FF0000;
        color: #FFFFFF;
    }    
`
export const ButtonWhite = styled.button`
    ${buttonStyles}
`