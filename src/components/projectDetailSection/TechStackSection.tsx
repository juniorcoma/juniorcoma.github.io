import styled from 'styled-components';
import { TECH_STACK_INFO } from '../../constant';
import TechStackCard from '../TechStactCard';

interface TechStackSectionProps {
  sectionInfo: {
    techStackInfo: {
      id: number;
      name: keyof typeof TECH_STACK_INFO;
      reasonUse: string;
    }[];
  };
}

export default function TechStackSection({ sectionInfo }: TechStackSectionProps) {
  return (
    <Section>
      <Title>핵심 사용 기술</Title>
      <Wrap>
        {sectionInfo.techStackInfo.map(skill => (
          <SkillCard key={skill.id}>
            <TechStackCard techStackName={skill.name} />
            <ReasonUse>{skill.reasonUse}</ReasonUse>
          </SkillCard>
        ))}
      </Wrap>
    </Section>
  );
}

const Section = styled.section`
  width: 108rem;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const SkillCard = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const ReasonUse = styled.p`
  font-size: 1.6rem;
  padding-top: 0.8rem;
  width: 80%;
`;
