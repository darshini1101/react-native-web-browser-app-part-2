import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

const Input = ({ onChangeText, placeholder, secureTextEntry, autoCapitalize = 'none' }) => {

    const { inputStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                onEndEditing={onChangeText}
                autoCapitalize={autoCapitalize}
            />
        </View>
    );
};

export { Input };
