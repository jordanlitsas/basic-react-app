import React from 'react';

import AppBar from './components/AppBar';
import { AppRoutes } from './routes/routes';
import { ContextManager } from './providers/index';

const App = () => {

  return (
    <ContextManager>
      <AppBar />
      <AppRoutes />
    </ContextManager>
  )
}

export default App;
