import styled from 'styled-components';

interface RetrospectiveSectionProps {
  children: React.ReactNode;
}

export default function RetrospectiveSection({ children }: RetrospectiveSectionProps) {
  return (
    <Section>
      <Title>프로젝트 회고록</Title>
      {children}
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

const RetrospectiveText = styled.p`
  font-size: 1.6rem;
`;
