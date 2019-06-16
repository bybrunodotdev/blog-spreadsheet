import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Description } from './styles';

const Card = ({
  title, description, link, cover,
}) => (
  <>
    <Container image={cover}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </a>
    </Container>
  </>
);

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
