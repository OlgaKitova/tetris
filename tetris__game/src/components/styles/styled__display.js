import styled from 'styled-components';

export const StyledDisplay = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
margin: 0 0 20px 0;
padding: 20px;
border: 4px solid #EEFF05;
min-height: 30px;
width: 100%;
border-radius: 20px;
color: ${props => props.gameOver ? 'FF0700' : '#999'};
background: #000;
font-size: 0.8rem;
`