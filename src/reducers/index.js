//Import Combine Reducers
import { combineReducers } from 'redux';
import WebReducer from './WebReducer';

//Combine Reducers
export default combineReducers({
    webBrowser: WebReducer
});
