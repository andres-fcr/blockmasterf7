import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export const CardS = styled(Card)`
  background: none;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--card-shadow-hover);
  }

  :hover .card-title {
    max-height: 100%;
    opacity: 1;
  }
`

export const CarCard = styled(Card)`
  min-width: 120px;
  max-width: 180px;
  transition: transform var(--transition-fast);

  &:hover {
    transform: scale(1.05);
  }
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
  border-radius: var(--radius-lg);
  background-color: #0f0e17;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--card-shadow);
  }
`

export const ListCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 32px;
  padding: 0 0 48px 0;
  justify-content: center;

  .card-item {
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    }
  }

  .card-title-link {
    transition: color var(--transition-fast), opacity var(--transition-fast);

    &:hover {
      color: var(--accent) !important;
      opacity: 1;
    }
  }
`

export const Titulo = styled.h1`
  padding: 48px 0 32px 0;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: -0.02em;
`

export const Rating = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  width: 64px;
  z-index: 1;
  height: 40px;
  background: var(--accent);
  -moz-border-radius: 0 100px 100px 0;
  -webkit-border-radius: 0 100px 100px 0;
  border-radius: 0 100px 100px 0;
  font-weight: 600;
  font-size: 0.875rem;
  color: #1a1a2e;
`

export const ImgCarousel = styled.img`
  object-fit: cover;
  top: 0;
  max-height: 50dvh;
  object-position: 50% 30%;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }
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