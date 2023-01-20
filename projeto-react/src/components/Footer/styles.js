import styled from 'styled-components'

export const FooterStyle = styled.footer`
    height: 16vh;
    width: 100%;
    background-color: var(--secondary-color);
    display: grid;
    align-items: center;
    grid-template-rows: 2fr 1fr;
    color: var(--light-color);
`
export const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Text = styled.p`
    font-size: 1.2rem;
    display: flex;
    a{
        color: var(--complementary-color);
        display: flex;
        justify-content: center;
        padding-left: 0.3rem;
        font-weight: 700;
    }
    
`
export const FooterTitle = styled.h3`
    font-size: 1.35rem;
    padding-bottom: 0.4rem;
    padding-top: 0.6rem;
    font-weight: 700;
`

