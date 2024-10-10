import styled from 'styled-components';
import ProjectList from '../components/ProjectList';

export default function ProjectPage() {
  return (
    <Wrap>
      <ProjectListContainer>
        <ProjectList type="personal" />
        <ProjectList type="team" />
      </ProjectListContainer>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 108rem;
  width: 100%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media (max-width: 1080px) {
    padding: 3.2rem;
  }
`;

const ProjectListContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
`;
