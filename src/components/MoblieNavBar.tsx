import { useState } from 'react';
import styled, { css } from 'styled-components';
import { NAV_BAR_LINK_LIST } from '../constant';
import { Link, useLocation } from 'react-router-dom';

export default function MoblieNavBar() {
  const [navBarState, setNavBarState] = useState(false);
  const { pathname } = useLocation();
  const handleMoblieNavBtn = () => {
    setNavBarState(true);
  };

  const handleClose = () => {
    setNavBarState(false);
  };
  return (
    <Container>
      <MobileNavBtn onClick={handleMoblieNavBtn}>메뉴</MobileNavBtn>
      <NavBarWarp $isOpen={navBarState}>
        <Inner>
          <CloseBox>
            <CloseBtn onClick={handleClose}>닫기</CloseBtn>
          </CloseBox>
          <LinkList>
            {NAV_BAR_LINK_LIST.map(link => (
              <li key={link.id}>
                {pathname === link.to ? (
                  <CurrentLink>{link.text}</CurrentLink>
                ) : (
                  <ContentLink to={link.to} onClick={handleClose}>
                    {link.text}
                  </ContentLink>
                )}
              </li>
            ))}
          </LinkList>
        </Inner>
      </NavBarWarp>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: none;
  z-index: 10000000;
  @media (max-width: 1080px) {
    display: block;
  }
`;

const MobileNavBtn = styled.button`
  width: 3.2rem;
  aspect-ratio: 1/1;
  position: fixed;
  top: 0.8rem;
  left: 0.8rem;
  color: transparent;
  background-image: url('/assets/images/moblie-menu.png');
`;

const NavBarWarp = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2c2c2c;
  transform: translateX(-100%);
  transition: transform 0.7s ease-in-out;
  padding: 3.2rem;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: translateX(0);
    `}
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const CloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.button`
  color: transparent;
  background-image: url('/assets/images/close_icon.png');
  width: 3.2rem;
  aspect-ratio: 1/1;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 3.2rem;
  color: #fff;
`;

const ContentLink = styled(Link)``;

const CurrentLink = styled.span`
  color: #5383e8;
`;
