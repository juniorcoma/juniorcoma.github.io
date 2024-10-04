import styled from 'styled-components';
import ContactCanvas from '../components/ContactCanvas';

export default function ContactPage() {
  return (
    <Wrap>
      <ContactBox>
        <Box1>
          <Title>Contact</Title>
          <Wrapper>
            <SocialBox>
              <span>Social</span>
              <SocialNav>
                <li>
                  <SocialLink href="https://www.instagram.com/pq120wal/" target="_blank" $hoverBackground>
                    <SocialLinkImg src="/assets/images/insta.png" alt="instagram img" />
                  </SocialLink>
                </li>
                <li>
                  <SocialLink href="https://github.com/juniorcoma" target="_blank">
                    <SocialLinkImg src="/assets/images/githubsocial.png" />
                  </SocialLink>
                </li>
              </SocialNav>
            </SocialBox>
            <DirectContactLink href="mailto:pq120wal39@gmail.com">pq120wal39@gmail.com</DirectContactLink>
            <DirectContactLink href="tel:+821056863892">010-5686-3892</DirectContactLink>
          </Wrapper>
        </Box1>
      </ContactBox>
      <ContactCanvas />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #fff;
  position: relative;
`;

const ContactBox = styled.div`
  width: 50%;
  min-height: 20rem;
  display: flex;
  gap: 1.6rem;
  z-index: 1000000;
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
`;

const Box1 = styled.div``;

const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  & > span {
    font-size: 2rem;
  }
`;

const SocialNav = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

const DirectContactLink = styled.a`
  font-size: 2rem;
  color: inherit;
  display: block;
  margin-bottom: 0.8rem;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialLink = styled.a<{ $hoverBackground?: boolean }>`
  width: 4.8rem;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;

  &:hover {
    background: ${({ $hoverBackground }) =>
      $hoverBackground
        ? 'radial-gradient(circle at 33% 100%, #fed373 4%, #f15245 30%, #d92e7f 62%, #9b36b7 85%, #515ecf)'
        : '#31313c'};
  }
`;

const SocialLinkImg = styled.img`
  width: 3.6rem;
  aspect-ratio: 1/1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
