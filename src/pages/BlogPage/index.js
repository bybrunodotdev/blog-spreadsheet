import React, { Component } from 'react';
import Tabletop from 'tabletop';
import Card from '../../components/Common/Card';

import { Container } from './styles';

import config from '../../config';

class BlogPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.init();
  }

  init() {
    Tabletop.init({
      key: config.KEY_SPREADSHEET,
      callback: (spreadsheetData) => {
        this.setState({
          data: spreadsheetData,
        });
      },
      simpleSheet: true,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <div className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </div>

        {data.map(post => (
          <Card
            key={post.id}
            cover={post.cover}
            title={post.title}
            description={post.description}
            link={post.link}
          />
        ))}
      </Container>
    );
  }
}

export default BlogPage;
