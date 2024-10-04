import styled from 'styled-components';

import { useState } from 'react';
import ContentTextContainer from './ContentTextContainer';
import ContentTriangle from '../assets/icons/ContentTriangle';

export default function ContentMenuContainer() {
  const [linkState, setLinkState] = useState<boolean | number>(false);
  return (
    <MenuContainer>
      <ContentTriangle setLinkState={setLinkState} />
      <ContentTextContainer textIndex={linkState} />
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  position: relative;
  margin-bottom: 10vh;
  display: flex;
  justify-content: center;
`;
