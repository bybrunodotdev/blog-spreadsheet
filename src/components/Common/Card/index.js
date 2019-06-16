import React from 'react';
import PropTypes from 'prop-types';

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

Card.propTypes = {
  imageURL: PropTypes.string.isRequired,
};

export default Card;
