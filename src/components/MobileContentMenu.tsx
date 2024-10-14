import styled from 'styled-components';
import { CONTENT_MENU_TEXT_LIST } from '../constant';
import { Link } from 'react-router-dom';

export default function MobileContentMenu() {
  return (
    <ContentList>
      {CONTENT_MENU_TEXT_LIST.map(content => (
        <li key={content.id}>
          <ContentLink to={content.mobile.to}>
            <IconBox $backImgSrc={content.mobile.iconSrc}></IconBox>
            <TextBox>
              <ContentTitle>{content.mobile.text}</ContentTitle>
              <ContentDescription>{content.mobile.description}</ContentDescription>
            </TextBox>
          </ContentLink>
        </li>
      ))}
    </ContentList>
  );
}

const ContentList = styled.ul`
  display: none;
  flex-direction: column;
  gap: 1.6rem;
  @media (max-width: 1080px) {
    display: flex;
  }
`;

const ContentLink = styled(Link)`
  width: 100%;
  padding: 0.8rem 0;
  display: flex;
  gap: 1.6rem;
`;

const IconBox = styled.div<{ $backImgSrc: string }>`
  min-width: 4.8rem;
  width: 4.8rem;
  height: 4.8rem;
  background-image: ${({ $backImgSrc }) => `url(${$backImgSrc})`};
  background-size: cover;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ContentTitle = styled.h3`
  font-size: 1.6rem;
`;

const ContentDescription = styled.p`
  font-size: 1.2rem;
`;
