import React from 'react';

import Card from '../../components/Common/Card';

import { Container } from './styles';

const cover = 'https://images.pexels.com/photos/2439595/pexels-photo-2439595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

const BlogPage = () => (
  <Container>
    <Card imageURL={cover} />
    <Card imageURL={cover} />
    <Card imageURL={cover} />
  </Container>
);

export default BlogPage;
