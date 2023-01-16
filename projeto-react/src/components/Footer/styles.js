import styled from 'styled-components'

export const FooterStyle = styled.footer`
    height: 15vh;
    width: 100%;
    background-color: white;
    display: grid;
    grid-template-rows: 2fr 1fr;
    color: pink;
`
export const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: start;
`
export const Text = styled.p`
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    display: flex;
    a{
        display: flex;
        justify-content: center;
        padding-left: 0.3rem;
        font-weight: 700;
    }
    
`
export const FooterTitle = styled.h3`
    font-size: 1.4rem;
    padding-bottom: 0.4rem;
    padding-top: 0.6rem;
`

