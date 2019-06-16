import React from 'react';

import { Container, Title, Description } from './styles';

const Card = ({ imageURL }) => (
  <>
    <Container image={imageURL}>
      <Title>Olá título</Title>
      <Description>
        Recentemente andei pesquisando um bom host para hospedar minhas aplicações feitas em Reactjs
        e encontrei o Netlify.
      </Description>
    </Container>
  </>
);

export default Card;
