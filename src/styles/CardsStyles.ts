import { Card, Carousel } from 'react-bootstrap'
import styled from 'styled-components'

export const CardS = styled(Card)`
  background: none;

  :hover .card-title {
    max-height: 100%;
    opacity: 1;
  }
`

export const CarCard = styled(Card)`
  min-width: 90px;
  max-width: 150px;
`

export const CardTitle = styled(Card.Title)`
  position: absolute;
  top: 0;
  z-index: 1;
  background: transparent;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease;
`

export const CardF = styled(Card)`
  background: none;
`
export const ImgCard = styled.img`
  border-radius: 15px;
  background-color: #0f0e17;
  /* position: relative; */
`
export const ListCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 40px;
  padding: 0 0 40px 0;
  justify-content: center;
`
export const Titulo = styled.h1`
  padding: 40px 40px 40px 0px;
  color: white;
`
export const Rating = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 6px;
  width: 60px;
  z-index: 1;
  height: 40px;
  border: 2px solid #0e3fa9;
  -moz-border-radius: 0 100px 100px 0;
  -webkit-border-radius: 0 100px 100px 0;
  border-radius: 0 100px 100px 0;
`

export const ImgCarousel = styled.img`
  object-fit: cover;
  top: 0;
  max-height: 25dvh;
  object-position: 50% 30%;
`

export const Car = styled.div`
  width: 100%;
  color: white;
`

export const CarT = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
`

export const CarouselItem = styled.div`
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, var(--bg-color), var(--bg-color-muted));
  }
`
