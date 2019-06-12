import React from 'react';
import { View, WebView } from 'react-native';
import styles from './styles';

const WebViewBrowser = ({ source }) => {
    return (
        <View style={styles.webBrowserContainer}>
            <WebView 
                source={{ uri: source }}
                startInLoadingState
            />
        </View>
    );
};

export { WebViewBrowser };
