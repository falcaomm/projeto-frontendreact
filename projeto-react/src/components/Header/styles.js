import styled from 'styled-components'

export const HeaderStyle = styled.header`
    position: fixed;
    top: 0;
    display: grid;
    grid-template-columns: 4fr 4fr 2fr;
    align-items: center;
    height: 10vh;
    width: 100%;
    background-color: var(--primary-color);
    z-index: 2;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    color: var(--light-color);
`
export const HeaderStyleCarrinho = styled(HeaderStyle)`
    grid-template-columns: 6fr 2fr;
`

export const TitleHeader = styled.h1`
    font-size: 1.5rem;
    font-weight: 900;
    padding-left: 5vw ;
    cursor: pointer;
`
export const Icone = styled.p`
    display: flex;
    font-weight: 800;
    padding-right: 5vw ;
    justify-self: end;
    font-size: 2rem;
    cursor: pointer;
    p{
        background-color: var(--complementary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.5rem;
        width: 1.5rem;
        font-size: 0.9rem;
        border-radius: 50%;
        margin-left: -0.6rem;
        margin-top: -0.2rem;
    }
`
