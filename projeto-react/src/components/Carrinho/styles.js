import styled from 'styled-components'

export const MainStyle = styled.main`
    margin: 8vh 10vw 1vh 10vw;
    padding: 1.5rem;
    background-color: var(--primary-color);
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 65vh;
`
export const Title = styled.h2`
    font-weight: 800;
    font-size: 2rem;
    padding: 0px 0px 0.5rem 1rem;
    color: var(--light-color);
    align-self: flex-start;
`

export const SectionCartVazio = styled.section`
    background-color: var(--light-color);
    color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    border-radius: 10px;
    min-height: 50vh;
`
export const Icons = styled.i`
    display: flex;
    font-size: 9rem;
    margin-right: 1rem;
`
export const Text = styled.p`
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem;
`
export const ButtonVoltar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    border-radius: 0.7rem;
    height: 7vh;
    padding: 1rem;
    border: none;
    font-size: 1.2rem;
    background-color: var(--complementary-color);
    color: var(--light-color);
    font-weight: 700;
`


export const SectionCart = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--light-color);
    color: var(--secondary-color);
    border-radius: 10px;
    padding: 1rem;
`
    export const Infos = styled(SectionCart)`
    margin-bottom: 0.5rem;
    text-align: center;
    width: 99.5%;
`
export const DivImgName = styled.div`
    min-width:35% ;
    max-width: 35%;
    display: flex;
    align-items: center;
    font-weight: 600;
`
export const Img = styled.img`
    max-width: 60px;
    margin-right: 1rem;
`
export const NameItem = styled.h3`
    font-weight: 800;
    font-size: 1rem;
`
export const PriceItem = styled.p`
    min-width: 15% ;
    max-width: 15%;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    margin: 0 1rem;    
`
export const DivQtd = styled.div`
    min-width: 20% ;
    max-width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    font-weight: 600;
`
export const ButtonQtd = styled.button`
    border: none;
    border-radius: 50%;
    color: var(--light-color);
    background-color: var(--secondary-color);
    height: 1.5rem;
    width: 1.5rem;
    font-size: 1rem;
`
export const QtdItem = styled.p`
    text-align: center;
    border: none;
    font-size: 1.2rem;
    padding: 0.8rem;
`

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    border: 3px solid var(--light-color);;
    font-weight: 700;
    font-size: 1rem;
    color: var(--light-color);
    background-color: var(--secondary-color);
    padding-bottom: 0.025rem;
    margin-left: -1rem;
`

export const DivStyle = styled.div`
    width: 101%;
    display: flex;
    align-items: center;
    margin: 0.5rem 0.5rem 0.5rem 1rem;
`
export const SectionFinale = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`
export const TitleFinale = styled.h2`
    color: var(--light-color);
    padding: 0.5rem 1rem;
`
export const ButtonEsvaziar = styled.button`
    display: flex;
    align-items: center;
    justify-content: end;
    border: none;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    color:  var(--secondary-color);
    background-color: var(--primary-color);
    font-weight: 700;
`
export const ButtonContinuar = styled(ButtonEsvaziar)`
    align-self: center;
    justify-content: center;
    width: 25%;
`
export const ButtonFinalizar = styled(ButtonVoltar)`
    width: 35%;
    align-self: center;
    margin: 0.5rem 0;
`