import React from 'react';
import { Provider } from 'react-redux';

import Routes from '@/routes';
import Theme from '@/config/Theme';
import store from '@/store';

const App = () => (
  <Provider store={store}>
    <Theme>
      <Routes />
    </Theme>
  </Provider>
);

export default App;
