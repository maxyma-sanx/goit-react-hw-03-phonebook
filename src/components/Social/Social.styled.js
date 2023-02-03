import styled from 'styled-components';

export const SocialWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const SocialLink = styled.a`
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.2);
  }
`;
