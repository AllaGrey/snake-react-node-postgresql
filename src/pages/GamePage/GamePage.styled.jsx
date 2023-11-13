import styled from "styled-components";

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

export const Button = styled.button`
border: none;
width: 120px;
height: 30px;
background-color: green;
color: white;
border-radius: 5px;
cursor: pointer;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    color: yellowgreen;
    background-color: white;
}
`