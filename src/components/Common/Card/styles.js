import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-image: url(${props => props.image});
  background-size: cover;
  width: calc(100% * (1 / 4) - 10px - 1px);
  height: ${props => props.theme.card.height};
  margin: ${props => props.theme.card.margin};
  border-radius: ${props => props.theme.card.borderRadius};

  @media only screen and (max-width: 1140px) {
    width: calc(100% - 15em);
  }

  @media only screen and (max-width: 650px) {
    width: calc(100% - 3em);
  }

  transition: all 0.5s ease;
  user-select: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.25);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    border-radius: ${props => props.theme.card.borderRadius};
    background-image: linear-gradient(transparent, rgba(183, 78, 173, 0.9));
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  margin: 1em;
  position: absolute;
  bottom: 2.5em;
  width: 100%;
  font-family: ${props => props.theme.default.fontFamily};
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.25rem;

  @media only screen and (max-width: 650px) {
    width: calc(100% - 3em);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -0.25em;
    left: 0;
    width: 85%;
    height: 1.5px;
    background-color: #fff;
  }
`;

export const Description = styled.p`
  font-family: ${props => props.theme.default.fontFamily};
  position: absolute;
  bottom: 0;
  margin: 3em;
  font-size: 0.75rem;
  width: 80%;
  color: #fff;
`;
