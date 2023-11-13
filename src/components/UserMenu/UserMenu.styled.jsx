import styled from "styled-components";

export const Menu = styled.div`
display: flex;
align-items: center;
gap: 10px;
color: yellowgreen;
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