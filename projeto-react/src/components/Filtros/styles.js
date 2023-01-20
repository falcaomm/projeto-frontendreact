import styled from 'styled-components'

export const AsideStyle = styled.aside`
    position: fixed;
    top: 15vh;
    left: 0;
    width: 23.5%;
    background-color: var(--primary-color);
    margin-left: 5%;
    color: var(--light-color);
    border-radius: 0.8rem;
`
export const InputStyle = styled.input`
    width: 25%;
    border-radius: 0.7rem;
    height: 5vh;
    border: none;
    padding-left: 0.5rem;
    font-size: 1rem;
    color: gray;
`
export const Titles = styled.h3`
    padding-bottom: 0.5rem;
    align-self: flex-start;
`
export const Label = styled.label`
    padding: 0.5rem;
`
export const DivStyle = styled.div`
    padding: 1rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SelectStyle = styled.select`
    width: 80%;
    border-radius: 0.7rem;
    height: 5vh;
    border: none;
    padding-left: 0.5rem;
    font-size: 1rem;
    color: gray;
`
export const ButtonCar = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.7rem;
    width: 90%;
    height: 7vh;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    margin: 0 0.5rem;
    background-color: var(--complementary-color);
    font-weight: 700;
    color: var(--light-color);
`
export const ButtonFiltros = styled(ButtonCar)`
    height: 5vh;
    width: 95%;
    margin: 0.5rem;
    background-color: var(--secondary-color);
    font-weight: 600;
`
export const Text = styled.p`
    align-self: flex-start;
    padding:0 0 0.5rem 1rem;
`
