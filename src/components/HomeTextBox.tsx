import styled from 'styled-components';
import { HOME_TEXT_RENDER_LIST } from '../constant';

interface HomeTextBoxProps {
  isTextVisible: boolean;
}

interface TextProps {
  $visible: boolean;
  $delayNum: number;
}

export default function HomeTextBox({ isTextVisible }: HomeTextBoxProps) {
  return (
    <TextBox>
      {HOME_TEXT_RENDER_LIST.map((text, index) => (
        <Text $visible={isTextVisible} $delayNum={index} key={index}>
          {text}
        </Text>
      ))}
    </TextBox>
  );
}

const TextBox = styled.div`
  position: relative;
  color: #fff;
  z-index: 100;
  font-size: 2rem;
  text-align: center;
`;

const Text = styled.p<TextProps>`
  transition: opacity 0.5s ease;

  &:not(:first-child) {
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
    transition-delay: ${({ $delayNum }) => `${($delayNum - 1) * 3}s`};
  }
`;
