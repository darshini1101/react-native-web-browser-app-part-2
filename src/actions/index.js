//Importing actions types
import { URL_NAME_CHANGED } from './types';

//Define Actions Creators with argument
export const urlNameChanged = (text) => {
    //return actions as object with action type and payload
    return {
        type: URL_NAME_CHANGED,
        payload: text
    };
};
