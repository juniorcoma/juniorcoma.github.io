import styled from 'styled-components';

interface ProjectMainSectionProps {
  sectionInfo: {
    type: string;
    shortDescription: string;
    previewVideoPath: string;
    title: string;
  };
  primaryColor: string;
}

export default function ProjectMainSection({ sectionInfo, primaryColor }: ProjectMainSectionProps) {
  return (
    <Section>
      <Container>
        <div>
          <ProjectShortSummaryBox>
            <span>{sectionInfo.type} Project</span>
            <p>{sectionInfo.shortDescription}</p>
          </ProjectShortSummaryBox>
          <Title $color={primaryColor}>{sectionInfo.title}</Title>
        </div>
        <VideoBox>
          {sectionInfo.previewVideoPath === '' ? (
            <EmptyVideo>미리보기가 제공되지 않습니다!</EmptyVideo>
          ) : (
            <Video src={sectionInfo.previewVideoPath} loop autoPlay muted></Video>
          )}
        </VideoBox>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
`;

const ProjectShortSummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  & > span {
    color: #c3c3c3;
  }
`;

const Title = styled.h1<{ $color: string }>`
  font-size: 6.4rem;
  color: ${({ $color }) => $color};
  @media (max-width: 1080px) {
    font-size: 3.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 6.4rem 0 0;
  min-height: 100vh;
`;

const VideoBox = styled.div`
  flex: 1;
  width: 100%;
  height: fit-content;
`;

const Video = styled.video`
  width: 100%;
`;

const EmptyVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2rem;
  height: 50rem;
  border-radius: 1.6rem;
  border: 1px solid #c3c3c3;
`;
