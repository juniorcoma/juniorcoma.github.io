import styled from 'styled-components';
import { CONTENT_MENU_TEXT_LIST } from '../constant';

interface ContentTextContainerProps {
  textIndex: number | boolean;
}

export default function ContentTextContainer({ textIndex }: ContentTextContainerProps) {
  return (
    <Container>
      <TextList>
        {CONTENT_MENU_TEXT_LIST.map(item => (
          <TextItem key={item.id} $isVisible={textIndex === item.id}>
            <span>0{item.id}</span>
            <h2>{item.text}</h2>
          </TextItem>
        ))}
      </TextList>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: calc(50% - 10rem);
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextList = styled.ul`
  font-size: 3.2rem;
  color: #fff;
`;

const TextItem = styled.li<{ $isVisible: boolean }>`
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  transition-delay: ${({ $isVisible }) => ($isVisible ? '1s' : 'none')};

  & > span {
    font-size: 2.4rem;
  }

  & > h2 {
    font-size: 3.6rem;
    text-shadow: 0px 0px 15px #fff;
  }
`;
