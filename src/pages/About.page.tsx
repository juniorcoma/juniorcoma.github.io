import styled from 'styled-components';
import TechStackBox from '../components/TechStackBox';

export default function AboutPage() {
  return (
    <Wrap>
      <Main>
        <Section>
          <Title>About Me</Title>
          <ContentWrapper>
            <TextContentBox>
              <SubTitle $fontSize={3.2}>"안녕하세요, 끊임없이 생각하는 프론트엔드 개발자 박현우입니다."</SubTitle>
              <Description>
                웹의 가장 강력한 힘은 무엇이라고 생각하나요? <br />
                오프라인 세계를 온라인으로 전환하는 능력이라고 생각합니다. <br /> 우리가 일상에서 경험하는 정보, 서비스,
                그리고 사람들과의 소통을 물리적 제약 없이 언제 어디서나 가능하게 만들고
                <br /> 시간과 공간의 경계를 허무는 것이 웹의 핵심이라고 생각합니다.
                <br /> 이런 웹의 무한한 가능성과 자신이 상상하는 모든 것을 웹에서 표현 할 수 있다는 점이 저를 프론트엔드
                개발자로 이끌었습니다.
              </Description>
              <Description>
                문제에 대해 끊임없이 고민하는 것을 좋아합니다. <br />한 문제에 다양한 방식으로 접근함으로써 정답에
                가까운 솔루션을 생각하고, 이 과정을 통해 한층 더 성장하는 개발자가 될 수 있다고 확신합니다.
              </Description>
              <Description>
                요구사항에 대해 끊임없이 생각하여 최상의 솔루션을 찾아내는 과정을 통해, 스스로의 성장 뿐만아니라
                사용자와의 거리를 점차 좁혀가는 개발자가 되겠습니다.
              </Description>
            </TextContentBox>
            <CanvasBox></CanvasBox>
          </ContentWrapper>
        </Section>
        <section>
          <SubTitle $fontSize={2.4}>저는 이런 것을 할 줄 알아요</SubTitle>
          <TechStackContainer>
            <TechStackBox
              groupText="Core Web Technologies"
              renderTechArr={['html', 'css', 'javascript', 'typescript']}
            />
            <TechStackBox
              groupText="Frameworks & Libraries"
              renderTechArr={['react', 'next', 'reactquery', 'zustand']}
            />
            <TechStackBox groupText="Styling & Design" renderTechArr={['tailwind', 'figma', 'styledcomponent']} />
            <TechStackBox groupText="Version Control & Deployment" renderTechArr={['github', 'vercel', 'Notion']} />
          </TechStackContainer>
        </section>
      </Main>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  min-height: 100vh;
  color: #fff;
`;

const Main = styled.main`
  width: 80%;
  margin: auto;
  padding: 6.4rem 0 12.8rem;
`;

const Section = styled.section``;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  margin-bottom: 4.8rem;
  color: #c3c3c3;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
`;

const CanvasBox = styled.div`
  min-width: 50rem;
  height: 50rem;
`;

const TextContentBox = styled.div``;

const SubTitle = styled.h2<{ $fontSize: number }>`
  font-size: ${({ $fontSize }) => `${$fontSize}rem`};
  font-weight: 500;
  margin-bottom: 3.2rem;
`;

const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
  color: #c3c3c3;
`;

const TechStackContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem 0;
`;
