import styled from 'styled-components';
import { TECH_STACK_INFO } from '../constant';

interface TechStackCardProps {
  techStackName: keyof typeof TECH_STACK_INFO;
}

export default function TechStackCard({ techStackName }: TechStackCardProps) {
  const { imgSrc, alt, text } = TECH_STACK_INFO[techStackName];
  return (
    <TechCard>
      <TechLogoImg src={imgSrc} alt={alt} />
      <span>{text}</span>
    </TechCard>
  );
}

const TechCard = styled.div`
  width: fit-content;
  min-width: 10rem;
  padding: 1.2rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background-color: #31313c;
  font-size: 1.6rem;
  height: fit-content;

  & > span {
    text-overflow: clip;
  }
`;
const TechLogoImg = styled.img`
  width: 4rem;
  aspect-ratio: 1/1;
`;
