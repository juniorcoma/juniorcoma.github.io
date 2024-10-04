import styled from 'styled-components';
import { TECH_STACK_INFO } from '../constant';

interface ProjectLinkNavProps {
  navList: {
    id: number;
    name: string;
    link: string;
    text: string;
  }[];
}

export default function ProjectLinkNav({ navList }: ProjectLinkNavProps) {
  return (
    <Nav>
      <List>
        {navList.map(list => {
          const { imgSrc } = TECH_STACK_INFO[list.name as keyof typeof TECH_STACK_INFO];

          return (
            <Item key={list.id}>
              <Link href={list.link}>
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
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Item = styled.li``;

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
`;

const LinkImg = styled.img`
  width: 3.6rem;
  aspect-ratio: 1/1;
`;
