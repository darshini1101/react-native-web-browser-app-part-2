//Import actions types
import { URL_NAME_CHANGED } from '../actions/types';

//Default state if no state is pass to the reducer
const INITIAL_STATE = { 
    url: '',
    error: false
};

//Valid URL NAME Pattern
const pattern = /^(?:(?:https?|ftp|http):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;

//Reducer receives actions and updated state
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case URL_NAME_CHANGED:
            return { 
                //Create a new state with current values(Copy old state)
                ...state, 
                url: action.payload,
                error: pattern.test(action.payload) };
        default:
            return state;
    }
};
