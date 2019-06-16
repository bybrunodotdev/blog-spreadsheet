import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1140px) {
    flex-direction: column;
  }
`;
