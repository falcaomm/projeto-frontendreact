import styled from 'styled-components'

export const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    height: 10vh;
    width: 100%;
    align-items: center;
    background-color: darkblue;
    justify-content: space-between;
    z-index: 2;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    color: white;
`
export const TitleHeader = styled.h1`
    font-size: 1.5rem;
    font-weight: 800;
    padding: 2rem 5vw 2rem 2rem;
    cursor: pointer;
`
export const Icone = styled.p`
    display: flex;
    font-weight: 800;
    padding: 2rem 2rem 2rem 5vw;
    justify-self: end;
    font-size: 2rem;
`
