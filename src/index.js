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
    yield takeEvery('GIT_GIFFS', fetchGifSearch);
    // yield takeEvery('',);
}

const searchResultReducer = (state = [], action) => {
    switch (action.type) {
        
        case 'SET_GIFS':
            console.log(action.payload.data)
            return action.payload.data;
        default:
            return state;
    }
}

//SAGA Function that hits server route to ping giphy API
function* fetchGifSearch(action) {
    console.log(action)
    try{
        const response = yield axios({
            method: 'POST',
            url: '/gifs',
            data: action.payload
        })
        //HOW to CATCH the response from server.js?
        yield put({
            type: 'SET_GIFS',
            payload: response.data
        });
    } catch(error) {
        console.log(error);
    }
}

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        searchResultReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
)

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
// registerServiceWorker();