import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import MainNavigator from './src';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
