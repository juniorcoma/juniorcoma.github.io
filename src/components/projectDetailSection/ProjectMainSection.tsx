import styled from 'styled-components';

interface ProjectMainSectionProps {
  sectionInfo: {
    type: string;
    shortDescription: string;
    previewVideoPath: string;
    title: string;
  };
}

export default function ProjectMainSection({ sectionInfo }: ProjectMainSectionProps) {
  return (
    <Section>
      <Container>
        <div>
          <ProjectShortSummaryBox>
            <span>{sectionInfo.type} Project</span>
            <p>{sectionInfo.shortDescription}</p>
          </ProjectShortSummaryBox>
          <Title>{sectionInfo.title}</Title>
        </div>
        <VideoBox>
          <Video src={sectionInfo.previewVideoPath} loop autoPlay muted></Video>
        </VideoBox>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 108rem;
  margin: auto;
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

const Title = styled.h1`
  font-size: 6.4rem;
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
`;

const Video = styled.video`
  width: 100%;
`;
