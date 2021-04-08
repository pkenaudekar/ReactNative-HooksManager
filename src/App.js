import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import keys from '../config/keys';
import Router from './Router';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: keys.apiKey,
      authDomain: keys.authDomain,
      projectId: keys.projectId,
      storageBucket: keys.storageBucket,
      messagingSenderId: keys.measurementId,
      appId: keys.appId,
      measurementId: keys.measurementId,
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
