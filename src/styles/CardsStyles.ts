import { Card } from "react-bootstrap";
import styled from "styled-components";

export const CardS = styled(Card)`
background:none;
:hover {
    opacity: 0.8;
}
`
export const CardF = styled(Card)`
background:none;
`
export const ImgCard = styled.img`
border-radius: 15px;
background-color: #0F0E17;
/* position: relative; */
`
export const ListCard = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, 200px);
gap: 40px;
padding: 40px;
justify-content: center;
`
export const Titulo = styled.h1`
padding: 40px 40px 0px 100px;
color: white;
`
export const Rating = styled.div`

position: absolute;
bottom:250px;
width: 60px; 
height: 40px; 
border: 2px solid #0E3FA9; 
-moz-border-radius: 0 100px 100px 0;
-webkit-border-radius: 0 100px 100px 0;
border-radius: 0 100px 100px 0;
`;

export const ImgCarousel = styled.img`
   /* position: absolute; */
   object-fit:cover;
   top: 0;
   max-height:300px;
    min-height: 30px;
    object-position: 30% 30%;
  
`;

export const Car = styled.div`
  width:80%;
  color: white;
`;

export const CarT = styled.div`
display: flex;
  width:80%;
  justify-content: center;
  `;