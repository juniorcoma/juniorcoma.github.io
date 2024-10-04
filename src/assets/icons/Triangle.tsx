import styled from 'styled-components';
import { forwardRef } from 'react';

function Triangle(_: any, ref: any) {
  return (
    <StyledSvg width="174" height="150" viewBox="0 0 174 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref={ref} d="M171.004 1.5L87 147L2.99556 1.49998L171.004 1.5Z" />
    </StyledSvg>
  );
}

export default forwardRef(Triangle);

const StyledSvg = styled.svg`
  cursor: pointer; /* 포인터 커서 추가 */

  path {
    stroke: white; /* 기본 선 색상 */
    stroke-opacity: 0.5; /* 기본 불투명도 */
    stroke-width: 3; /* 선 두께 */
    transition: stroke-opacity 0.3s ease; /* 불투명도 전환 */
  }
`;
