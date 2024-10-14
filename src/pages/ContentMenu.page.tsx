import styled from 'styled-components';
import ContentCanvas from '../components/ContentCanvas';
import ContentMenuContainer from '../components/ContentMenuContainer';
import MobileContentMenu from '../components/MobileContentMenu';

export default function ContentMenuPage() {
  return (
    <Wrap>
      <ContentSection>
        <Title>CONTENT</Title>
        <ContentMenuContainer />
        <MobileContentMenu />
      </ContentSection>
      <ContentCanvas />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 6.4rem;
`;

const Title = styled.h1`
  position: relative;
  color: #fff;
  font-size: 2.4rem;
  z-index: 1000000;
  font-weight: 400;
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1080px) {
    padding: 0 3.2rem;
    justify-content: flex-start;
    width: 100%;
    margin: none;
    gap: 3.2rem;
  }
`;
