import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {}
const middleware = [thunk]

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware),

    )
);
export default store;