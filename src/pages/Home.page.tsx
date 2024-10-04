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
      <HomeCanvas setTextVisible={setIsTextVisible} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6.4rem 0 12.8rem;
`;
