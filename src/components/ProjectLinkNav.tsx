import styled, { css } from 'styled-components';
import { TECH_STACK_INFO } from '../constant';
import { useState } from 'react';

interface ProjectLinkNavProps {
  navList: {
    id: number;
    name: string;
    link: string;
    text: string;
  }[];
}

export default function ProjectLinkNav({ navList }: ProjectLinkNavProps) {
  const [animationState, setAnimationState] = useState(false);
  return (
    <Nav>
      <List>
        <MoblieBtn onClick={() => setAnimationState(prev => !prev)}>링크 바로가기 메뉴</MoblieBtn>
        {navList.map((list, index) => {
          const { imgSrc } = TECH_STACK_INFO[list.name as keyof typeof TECH_STACK_INFO];
          const transValue = getTransValue(index);
          return (
            <Item key={list.id} $animate={animationState} $transValue={transValue}>
              <Link href={list.link} target="_blank">
                <LinkImg src={imgSrc} />
                <span>{list.text}</span>
              </Link>
            </Item>
          );
        })}
      </List>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 6.4rem;
  right: 3.2rem;
  @media (max-width: 1080px) {
    top: 88%;
    right: 10%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Item = styled.li<{ $animate: boolean; $transValue: number[] }>`
  @media (max-width: 1080px) {
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    ${({ $animate, $transValue }) =>
      $animate &&
      css`
        transform: translate(${-$transValue[0]}%, ${-$transValue[1]}%);
      `}
  }
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;
  color: #1f1f1f;
  font-size: 1.4rem;
  background-color: #fff;
  & > span {
    @media (max-width: 1080px) {
      display: none;
    }
  }

  @media (max-width: 1080px) {
    padding: 0.8rem;
    border-radius: 50%;
  }
`;

const LinkImg = styled.img`
  width: 3.6rem;
  aspect-ratio: 1/1;
  @media (max-width: 1080px) {
    width: 2.4rem;
  }
`;

const MoblieBtn = styled.button`
  display: none;
  width: 4rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  z-index: 100;
  color: transparent;
  background-image: url('/assets/images/link_menu.png');
  background-repeat: none;
  background-size: cover;
  font-size: 0;
  @media (max-width: 1080px) {
    display: block;
  }
`;

function getTransValue(index: number): number[] {
  switch (index) {
    case 0:
      return [150, 0];
    case 1:
      return [100, 100];

    case 2:
      return [0, 150];
  }
  return [];
}
