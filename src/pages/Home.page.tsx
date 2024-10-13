import { useState } from 'react';
import HomeCanvas from '../components/HomeCanvas';
import HomeTextBox from '../components/HomeTextBox';
import HomeNextBtn from '../components/HomeNextBtn';
import styled from 'styled-components';

export default function HomePage() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  return (
    <Wrap>
      <ContentBox>
        <HomeTextBox isTextVisible={isTextVisible} />
        <HomeNextBtn isVisible={isTextVisible} />
      </ContentBox>
      <MobileContentBox>
        <PolyganImgBox>
          <PolyganImg src="/assets/images/polygan.png" />
        </PolyganImgBox>
        <MobileTextBox>
          <p>삼각형하면 무엇이 떠오르시나요?</p>
          <p>삼각형은 가장 적은 점으로 그릴 수 있는, 안정적이고 균형잡힌 다각형이자 기하학의 시작입니다.</p>
          <p>그래서 삼각형이 여러개가 모이면 모든 다각형을 나타낼 수 있죠.</p>
          <p>저는 이러한 삼각형처럼 기본을 튼튼히 하며, 점점 성장해나가는 삼각형 개발자</p>
          <MobileTitle>
            Frontend Developer <Strong>박현우</Strong>
            입니다.
          </MobileTitle>
        </MobileTextBox>
      </MobileContentBox>
      <HomeCanvas setTextVisible={setIsTextVisible} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  @media (max-width: 1080px) {
    padding: 0 3.2rem;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6.4rem 0 12.8rem;

  @media (max-width: 1080px) {
    display: none;
  }
`;

const MobileContentBox = styled(ContentBox)`
  display: none;
  padding: 3.2rem 0;
  gap: 3.2rem;
  @media (max-width: 1080px) {
    display: block;
  }
`;

const MobileTextBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.6rem;
`;

const PolyganImg = styled.img`
  transform-origin: center center;
  width: 80%;
`;

const PolyganImgBox = styled.div`
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileTitle = styled.h1`
  font-size: 2.4rem;
`;

const Strong = styled.strong`
  color: #5383e8;
  font-size: 2.8rem;
`;
