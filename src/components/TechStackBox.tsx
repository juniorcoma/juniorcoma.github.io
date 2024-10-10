import styled from 'styled-components';
import { TECH_STACK_INFO } from '../constant';
import TechStackCard from './TechStactCard';

interface TechStackBoxProps {
  groupText: string;
  renderTechArr: (keyof typeof TECH_STACK_INFO)[];
}

export default function TechStackBox({ groupText, renderTechArr }: TechStackBoxProps) {
  return (
    <Box>
      <TechGroupText>{groupText}</TechGroupText>
      <TechStatckBox>
        {renderTechArr.map(skill => (
          <li key={skill}>
            <TechStackCard techStackName={skill} />
          </li>
        ))}
      </TechStatckBox>
    </Box>
  );
}

const Box = styled.div``;

const TechGroupText = styled.h3`
  font-size: 1.6rem;
  color: #c3c3c3;
  margin-bottom: 1.2rem;
`;

const TechStatckBox = styled.ul`
  display: flex;
  gap: 0.8rem;

  flex-wrap: wrap;
`;
