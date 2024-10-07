import styled, { css } from 'styled-components';
import ProjectCoreImgContainer from '../ProjectCoreImgContainer';
import { useState } from 'react';

interface CoreSectionProps {
  sectionInfo: {
    coreList: {
      id: number;
      btnText: string;
      imgSrc: string;
      description: string;
    }[];
  };
  primaryColor: string;
}

export default function CoreSection({ sectionInfo, primaryColor }: CoreSectionProps) {
  const [coreIndex, setCoreIndex] = useState(0);
  const handleImgControllBtn = (index: number) => {
    setCoreIndex(index);
  };
  return (
    <Section>
      <Title>핵심 기능</Title>
      <Container>
        <ProjectCoreImgContainer
          imgSrc={sectionInfo.coreList[coreIndex].imgSrc}
          description={sectionInfo.coreList[coreIndex].description}
        />
        <ImgControllBox>
          {sectionInfo.coreList.map((list, index) => (
            <li key={list.id}>
              <ImgControllBtn
                $active={index === coreIndex}
                onClick={() => handleImgControllBtn(index)}
                $color={primaryColor}
              >
                {list.btnText}
              </ImgControllBtn>
            </li>
          ))}
        </ImgControllBox>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 108rem;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 3.2rem;
`;

const Container = styled.div`
  display: flex;
  gap: 6.4rem;
  min-height: 55rem;
`;

const ImgControllBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ImgControllBtn = styled.button<{ $active: boolean; $color: string }>`
  color: #fff;
  font-size: 1.6rem;
  border: 1px solid #fff;
  min-width: 20rem;
  padding: 1.2rem 0;
  border-radius: 0.8rem;

  ${({ $active, $color }) =>
    $active &&
    css`
      border: 1px solid transparent;
      background-color: ${$color};
      font-weight: bold;
    `}
`;
