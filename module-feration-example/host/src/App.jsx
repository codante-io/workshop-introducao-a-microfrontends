import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider, Button } from '@mantine/core';
// const HeaderMenu = React.lazy(() => import('child/HeaderMenu'));
import HeaderMenu from 'child/HeaderMenu';
import FooterLinks from 'child/FooterLinks';

import '@mantine/core/styles.css';

import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  // const [showHeader, setShowHeader] = useState(false);

  return (
    <div className="container">
      <MantineProvider defaultColorScheme="dark">
        <ErrorBoundary fallback={<p>Deu ruim</p>}>
          <HeaderMenu header={{ name: 'Host App' }} />
        </ErrorBoundary>
        <FooterLinks />
      </MantineProvider>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
