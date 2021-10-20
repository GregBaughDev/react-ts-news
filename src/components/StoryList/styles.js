import styled from "styled-components";

export const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin: 2vh 0;
`

export const H3 = styled.h3`
    font-size: 1.25rem;
    font-weight: 400;
`

export const Section = styled.section`
    width: auto;
    background-color: #FFB6B6;
    margin: 2vh 0;
    height: 8vh;
    border-radius: 50px;
    transition: background-color 0.5s;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
        background-color: #E1A0A0;
    }
`

export const A = styled.a`
    text-decoration: none;
    color: black;
`