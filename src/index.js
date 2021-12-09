import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
//import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function

// This is out watcher function
function* rootSaga() {
    yield takeEvery('', );
    yield takeEvery('',);
}

const listOfGifReducer = (state =[], action) => {
    switch (action.type) {
        case 'SET_GIFS':
        return action.payload;
        default:
            return state;
    }
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
 //       ourreducergoeshere
        listOfGifReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));

