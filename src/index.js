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
    yield takeEvery('HOLD_FAVE', postFaveGif);
    yield takeEvery('FETCH_FAVES', fetchFaveGifs);
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

const faveGifReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_FAVES':
            return action.payload;
        default:
            return state;
    }
}

//SAGA Function that GETS favedGifs from DB
function* fetchFaveGifs(action) {
    console.log(action)
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/favorite'
        })
        yield put({
            type: 'STORE_FAVES',
            payload: response.data
        })
    } catch(error) {
        console.log(error);
    }
}

//SAGA Function that POSTS faved URL to server to query to database
function* postFaveGif(action) {
    console.log(action.payload)
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/favorite',
            data: {url: action.payload}
        })
    } catch(error) {
        console.log(error);
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
        searchResultReducer,
        faveGifReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
)

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
// registerServiceWorker();