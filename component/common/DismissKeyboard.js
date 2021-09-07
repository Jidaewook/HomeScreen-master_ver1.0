import React from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const DismissKeyboard = ({children}) => {
    const onPress = () => Keyboard.dismiss();
    
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            {children}
        </TouchableWithoutFeedback>
    );
};

export default DismissKeyboard;