import { Button } from "react-bootstrap";
import styled from "styled-components";

export const DetailsWrapper = styled.div<{ $backdrop?: string }>`
  min-height: 100vh;
  background: ${props => props.$backdrop
    ? `linear-gradient(to bottom, rgba(15,14,23,0.7), rgba(15,14,23,0.98) 50%, var(--bg-color)), url(${props.$backdrop})`
    : 'var(--bg-color)'};
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
`;

export const HeroSection = styled.div`
  position: relative;
  min-height: 80px;
`;

export const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 16px;
`;

export const BackButton = styled(Button)`
  border-radius: var(--radius-sm);
  background: rgba(40, 40, 55, 0);
  border: none;
  color: white;
  backdrop-filter: blur(8px);
  transition: all var(--transition-fast);

  &:hover {
    background: rgba(60, 60, 80, 0.95);
    color: white;
    transform: translateY(-2px);
  }
`;

export const ContentContainer = styled.div`
  color: white;
  display: flex;
  max-width: 1000px;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto 0;
  position: relative;
  z-index: 2;
  gap: 40px;
  padding: 0 16px 48px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const PosterImg = styled.div`
  width: 320px;
  flex-shrink: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--card-shadow-hover);
  transition: transform var(--transition-normal);

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: fill;
  }
`;

export const DetailsText = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Tagline = styled.p`
  font-style: italic;
  color: var(--text-secondary);
  font-size: 1.25rem;
  margin-bottom: 20px;
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 12px;

  svg {
    color: var(--accent);
  }
`;

export const RatingBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--accent);
  color: #1a1a2e;
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 1rem;
`;

export const GenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
`;

export const GenreTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: all var(--transition-fast);

  &:hover {
    background: var(--accent);
    color: #1a1a2e;
  }
`;

export const Overview = styled.div`
  width: 100%;
  margin: 0 auto;

  h4 {
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 12px;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.75;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  h5 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-secondary);
    margin-bottom: 4px;
  }

  p {
    font-size: 1rem;
    color: var(--text-primary);
    font-weight: 500;
  }
`;

export const LoadingWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner-border {
    color: var(--accent);
    --bs-spinner-border-width: 3px;
  }
`;

export const ErrorWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: var(--text-primary);
`;

export const SimilarSection = styled.section`
  padding: 40px 16px 64px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 24px;
    color: var(--text-primary);
  }
`;

export const SimilarGrid = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding-bottom: 16px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--bg-color-light);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--text-secondary);
    border-radius: 4px;
  }
`;

export const SimilarCard = styled.div`
  background: transparent;
  cursor: pointer;
  transition: transform var(--transition-normal);
  flex-shrink: 0;
  width: 180px;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    border-radius: var(--radius-md);
    background-color: var(--bg-color-light);
    aspect-ratio: 2 / 3;
    object-fit: cover;
  }

  p {
    margin-top: 10px;
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.4;
  }
`;

export const Button1 = styled(Button)`
margin: 10px;
border-radius: var(--radius-sm);
transition: all var(--transition-fast);

&:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(254, 217, 65, 0.3);
}
`

export const ContainerC = styled.div`
color: white;
display: flex;
justify-content: center;
margin-top: 20px;
gap: 12px;
`

export const ImgCard = styled.img`
background-color: #0F0E17;
border-radius: var(--radius-lg);
max-width: 450px;
width: 100%;
box-shadow: var(--card-shadow);
transition: transform var(--transition-normal), box-shadow var(--transition-normal);

&:hover {
  transform: scale(1.02);
  box-shadow: var(--card-shadow-hover);
}
`

export const Text = styled.div`
margin: 24px;
flex: 1;

h3 {
  font-weight: 600;
  font-size: 1.75rem;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
}

p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
}
`

export const Container = styled.div`
color: white;
display: flex;
max-width: 900px;
justify-content: center;
margin-top: 32px;
gap: 40px;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
`
