import styled from 'styled-components';
import { NAV_BAR_LINK_LIST } from '../constant';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Nav>
      <List>
        {NAV_BAR_LINK_LIST.map(link => (
          <li key={link.id}>
            <NavLink to={link.to}>{link.text}</NavLink>
          </li>
        ))}
      </List>
    </Nav>
  );
}

const Nav = styled.nav`
  font-size: 1.6rem;
  position: fixed;
  top: 3.2rem;
  left: 3.2rem;
  color: #fff;
  z-index: 1000001;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s;
  &:hover {
    color: #fff;
  }
`;
