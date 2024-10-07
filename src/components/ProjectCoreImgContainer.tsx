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
`;

const ImgBox = styled.div`
  width: 100%;
  height: 45rem;
`;

const ProJectCoreImg = styled.img`
  width: 100%;
  height: 100%;
  flex: 1;
  border-radius: 1.6rem;
`;
