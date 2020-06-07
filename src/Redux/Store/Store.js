import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../Reducers/index'
import thunk from 'redux-thunk'

/*const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);


const store = createStore(rootReducer, undefined, composedEnhancers)

export default store;