import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import HeaderMenu from './Header/HeaderMenu';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import FooterLinks from './Header/FooterLinks';

const App = () => {
  return (
    <MantineProvider defaultColorScheme="dark">
      <HeaderMenu header={{ name: 'Aplicação filha' }} />
      <FooterLinks />
    </MantineProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
