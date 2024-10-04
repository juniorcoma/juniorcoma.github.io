import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Triangle from '../assets/icons/Triangle';

interface HomeNextBtnProps {
  isVisible: boolean;
}

export default function HomeNextBtn({ isVisible }: HomeNextBtnProps) {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength(); // 전체 길이 계산
      pathRef.current.style.strokeDasharray = `${length}`; // 대시 배열 설정
      pathRef.current.style.strokeDashoffset = `${length}`; // 오프셋 설정
    }
  }, []);

  const handleMouseEnter = () => {
    if (pathRef.current) {
      pathRef.current.style.transition = 'stroke-dashoffset 1s ease'; // 애니메이션 시간 설정
      pathRef.current.style.strokeDashoffset = '0'; // 오프셋을 0으로 설정하여 애니메이션 시작
    }
  };

  const handleMouseLeave = () => {
    if (pathRef.current) {
      pathRef.current.style.strokeDashoffset = `${pathRef.current.getTotalLength()}`; // 오프셋을 원래 길이로 되돌림
    }
  };
  return (
    <LinkButton to={'/content'} $isVisible={isVisible} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Triangle ref={pathRef} />
      <LinkText>다음으로</LinkText>
    </LinkButton>
  );
}

const LinkButton = styled(Link)<{ $isVisible: boolean }>`
  align-self: center;
  position: relative;
  z-index: 1000000;
  display: inline-flex;
  width: fit-content;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  transition-delay: 10s;
  &:hover {
    path {
      stroke-opacity: 1; /* 호버 시 불투명도 변경 */
      transition: stroke-opacity 0.3s ease; /* 불투명도 전환 */
    }

    span {
      color: #fff;
    }
  }
`;

const LinkText = styled.span`
  display: block;
  width: fit-content;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.6rem;
  font-weight: bold;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
`;
