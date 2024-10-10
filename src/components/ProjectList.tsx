import styled from 'styled-components';
import Tetrahedron from '../assets/icons/Tetrahedron ';
import TriangleIcon from '../assets/icons/Triangle_Icon';
import { Link } from 'react-router-dom';
import { PROJECT_RENDER_INFO } from '../constant';

interface ProjectListProps {
  type: 'personal' | 'team';
}

export default function ProjectList({ type }: ProjectListProps) {
  const projectArr = PROJECT_RENDER_INFO[type];
  return (
    <Container>
      <ProjectGroupCard>
        {type === 'personal' ? <TriangleIcon /> : <Tetrahedron />}
        <h2>{type === 'personal' ? 'Personal' : 'Team'} Project</h2>
      </ProjectGroupCard>
      <List>
        {projectArr.map(project => (
          <ProjectItem key={project.id}>
            <ProjectCard to={project.link}>
              <ProjectPreviewImg src={project.previewImg} />
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTitle>{project.projectName}</ProjectTitle>
            </ProjectCard>
          </ProjectItem>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 25rem;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
`;

const ProjectGroupCard = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  & > h2 {
    font-size: 1.6rem;
  }
`;

const ProjectCard = styled(Link)`
  color: inherit;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  height: 100%;
`;

const ProjectTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 400;
`;

const ProjectDescription = styled.p`
  font-size: 1.4rem;
  color: #c3c3c3;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
`;

const ProjectPreviewImg = styled.img`
  flex: 1;
  width: 100%;
  border-radius: 0.8rem;
  object-fit: cover;
  margin-bottom: 0.8rem;
`;

const List = styled.ul`
  display: flex;
  gap: 0.8rem;
  flex: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectItem = styled.li`
  position: relative;
  flex: 1;
  max-width: 27rem;
  overflow: hidden;
  border-radius: 0.8rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;
