import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProjectMainSection from '../components/projectDetailSection/ProjectMainSection';
import { PROJECT_DETAIL_INFO } from '../constant';
import TechStackSection from '../components/projectDetailSection/TechStackSection';
import CoreSection from '../components/projectDetailSection/CoreSection';
import RetrospectiveSection from '../components/projectDetailSection/RetrospectiveSection';
import ProjectLinkNav from '../components/ProjectLinkNav';

export default function ProjectDetailPage() {
  const { projectName } = useParams<{ projectName: string }>();

  if (!projectName || !(projectName in PROJECT_DETAIL_INFO)) {
    return <div>잘못된 프로젝트 경로입니다.</div>;
  }

  const { type, section1, section2, section3, section4, projectNavLinkList, primaryColor } =
    PROJECT_DETAIL_INFO[projectName as keyof typeof PROJECT_DETAIL_INFO];
  return (
    <Wrap>
      <ProjectLinkNav navList={projectNavLinkList} />
      <Main>
        <ProjectMainSection sectionInfo={section1} primaryColor={primaryColor}></ProjectMainSection>
        <TechStackSection sectionInfo={section2}></TechStackSection>
        <CoreSection sectionInfo={section3} primaryColor={primaryColor} />
        <RetrospectiveSection type={type} sectionInfo={section4} />
      </Main>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-height: 100vh;
  color: #fff;
`;

const Main = styled.main`
  padding-bottom: 12.8rem;
  display: flex;
  flex-direction: column;
  gap: 12.8rem;
`;