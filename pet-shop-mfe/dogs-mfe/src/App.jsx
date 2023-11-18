import React from 'react';
import ReactDOM from 'react-dom';
import ListDogs from './components/ListDogs';
import ShowDog from './components/ShowDog';
import { MantineProvider, Grid, Container } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';

const App = () => (
  <MantineProvider defaultColorScheme="dark">
    <Container>
      <ListDogs />
      <ShowDog dogId={1} />
    </Container>
  </MantineProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
