//Import
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Header, WebViewBrowser } from '../../components/common';
import { urlNameChanged } from '../../actions';
import styles from './styles';

class WebBrowser extends Component {
    //Call Action Creator
    //Dispatch action  using  Action Creator  
    onURLNameChange = (event) => {
        this.props.urlNameChanged(event.nativeEvent.text.trim());   
    }


    //Helper function for error message
    renderErrorMessage = () => {
        if (this.props.url === '') return;

        if (!this.props.error) {
            return (
                <View style={styles.textErrorStyle}>
                    <Text style={styles.textError}>
                        You have enter an invalid URL !
                    </Text>
                </View>
            );
        }

        return <WebViewBrowser source={this.props.url} />;
    }

    //Render functions return JSX CODE
    render() {
        return (
            <View style={styles.container}>
                <Header headerText="Web View Browser App" />
                <Input 
                    placeholder="Enter URL" 
                    value={this.props.url} 
                    onChangeText={this.onURLNameChange} 
                />
                {this.renderErrorMessage()}
            </View>
        );
    }
}

//Maps state to  as props
const mapStateToProps = state => {
    return {
        url: state.webBrowser.url,
        error: state.webBrowser.error
    };
};

//Connect Componet with redux
export default connect(mapStateToProps, { urlNameChanged })(WebBrowser);
