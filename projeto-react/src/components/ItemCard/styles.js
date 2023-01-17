import styled from 'styled-components'

export const CardItem = styled.section`
    background-color: var(--light-color);
    display: flex;
    padding: 1rem;
    align-items: center;
    color: var(--secondary-color);
    border-radius: 10px;
    margin-bottom: -3.5rem;
`
export const Img = styled.img`
    justify-self: center;
    padding-left: 1rem;
    width: 200px;
    height: 150px;
`
export const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
`
export const NameItem = styled.h3`
    font-weight: 800;
    font-size: 2.2rem;
`
export const DescriptionItem = styled.p`
    font-size: 0.75rem;
    margin: 10px 0;
    text-align: justify;
    font-size: 1rem;
`
export const PriceItem = styled.p`
    font-weight: 800;
    font-size: 1.5rem;
`
export const DivButton = styled.div`
    width: 101%;
    display: flex;
    justify-content: end;
`
export const ButtonAdd = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    border: none;
    font-weight: 700;
    font-size: 3.5rem;
    color: var(--secondary-color);
    background-color: var(--complementary-color);
`
