import React from 'react';
import Head from 'next/head';

import Svg from '../assets/test.svg';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <Svg />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + NextJS structure made by rocketseat</p>
      </main>
    </Container>
  );
};

export default Home;
