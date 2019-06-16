import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1.25rem;
  background-color: white;
  border-top-left-radius: 2rem;
  transition: all 0.5s ease-out;

  &:hover {
    border-top-left-radius: 0;
  }
`;

export const Copyright = styled.a`
  text-decoration: none;
  color: ${props => props.theme.default.colors.primary};
  font-family: ${props => props.theme.default.fontFamily};
`;
