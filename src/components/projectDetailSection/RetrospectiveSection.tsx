import styled from 'styled-components';

interface RetrospectiveSectionProps {
  type: 'team' | 'personal';
  sectionInfo: {
    link?: string;
    myFeatureList?: {
      id: number;
      feature: string;
    }[];
  };
}

export default function RetrospectiveSection({ type, sectionInfo }: RetrospectiveSectionProps) {
  if (type === 'personal') {
    return (
      <Section>
        <RetrospectiveLink href={sectionInfo.link} target="_blank">
          <Title>프로젝트 회고록 바로가기</Title>
        </RetrospectiveLink>
      </Section>
    );
  }
  if (type === 'team') {
    return (
      <Section>
        <Title>구현한 파트</Title>
        {sectionInfo.myFeatureList?.map((feature, index) => (
          <FeatureBox key={feature.id}>
            <Index>{index + 1}</Index>
            <FeatureText>{feature.feature}</FeatureText>
          </FeatureBox>
        ))}
      </Section>
    );
  }
  return null;
}

const Section = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
`;

const FeatureText = styled.p`
  font-size: 1.6rem;
`;

const RetrospectiveLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const Index = styled.span`
  font-size: 4.8rem;
  margin-right: 1.6rem;
`;

const FeatureBox = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  margin-bottom: 2.4rem;
`;
