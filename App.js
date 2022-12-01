import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {default as AsyncStorage2} from '@react-native-async-storage/async-storage';
import getStoredStateMigrateV4 from 'redux-persist/lib/integration/getStoredStateMigrateV4';
import AppReducer from './src/reducer';

import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {PersistGate} from 'redux-persist/integration/react';
import InitialSplashView from './src/component/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {Screen} from './src/navigation/screens';

// setup navigation
const persistConfig = {
  key: 'root',
  storage,
  getStoredState: getStoredStateMigrateV4({
    blacklist: ['navigation'],
    storage: AsyncStorage2,
  }),
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, AppReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export default function App() {
  const {container} = styles;
  return (
    <Provider store={store}>
      <PersistGate loading={<InitialSplashView />} persistor={persistor}>
        <View style={container}>
          <StatusBar hidden={false} barStyle="light-content" />
          <NavigationContainer>
            <Screen />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
}
//9714714057

const styles = StyleSheet.create({
  container: {flex: 1},
});
