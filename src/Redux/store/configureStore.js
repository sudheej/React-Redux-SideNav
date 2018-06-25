import { createStore } from 'redux'
import { sidebarReducer } from '../reducer/sidebar'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';


export const configurestore = () => {
    const store = createStore(sidebarReducer, composeWithDevTools(
      ));

    return store;
}


