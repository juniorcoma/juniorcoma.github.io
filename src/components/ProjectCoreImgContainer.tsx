import styled from 'styled-components';

interface ProjectCoreImgContainerProps {
  imgSrc: string;
  description: string;
}

export default function ProjectCoreImgContainer({ imgSrc, description }: ProjectCoreImgContainerProps) {
  return (
    <Container>
      <ImgBox>
        <ProJectCoreImg src={imgSrc} alt="프로젝트 기능 이미지" />
      </ImgBox>
      <p>{description}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  font-size: 1.6rem;
  flex: 1;
  @media (max-width: 1080px) {
    flex: 0;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  aspect-ratio: 1.62/1;
`;

const ProJectCoreImg = styled.img`
  width: 100%;
  height: 100%;
  flex: 1;
  border-radius: 1.6rem;
`;
