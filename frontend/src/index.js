import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {compose, createStore, applyMiddleware} from 'redux'
import {localforage} from 'localforage'
import {persistStore, autoRehydrate} from 'redux-persist'
import Favicon from 'react-favicon'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './App/Reducers'
import Root from './App/Containers/Root'
import './index.css';
import * as images from './App/Config/Images'


let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate()
  )
)

persistStore(store, { storage: localforage, whitelist: ['persistency'] }) //add .purge() here if the persistency store needs to be reset

render(
  <div>
  <Favicon url={images.favicon} />
  <Provider store={store}>
    <Root />
  </Provider>
</div>,
  document.getElementById('root')
)

registerServiceWorker();
