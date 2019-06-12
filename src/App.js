//Import react Library and view
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import WebBrowser from '../src/containers/WebBrowser';


//Wrap the view with the Provider
//Pass the provide a store
class App extends Component {
    render() {
        //Create store
        const store = createStore(reducers);

        return (
            <Provider store={store}>
                <WebBrowser />
            </Provider>
        );
    }
}

export default App;
