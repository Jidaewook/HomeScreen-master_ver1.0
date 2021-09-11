import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { COLORS } from '../../consts';


const FormInput = ({
    value,
    containerStyle,
    label,
    labelStyle,
    placeholder, 
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType='default',
    autoCompleteType='off',
    autoCapitalize='none',
    errorMsg=''
}) => {
    return (
        <View style={{...containerStyle}}>
            <View style={styles.formContainer}>
                <Text style={styles.label}>
                    {label}

                </Text>
                <Text style={styles.errorStyle}>
                    {errorMsg}
                </Text>
            </View>
            <View
                style={styles.prependStyle}
            >
                {prependComponent}
                <TextInput 
                    value={value}
                    style={{flex: 1, ...inputStyle}}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray2}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                />
                {appendComponent}
            </View>
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        color: COLORS.gray1,
    },
    errorStyle: {
        color: COLORS.purple,
    },
    prependStyle: {
        flexDirection: 'row',
        height: 55,
        paddingHorizontal: 25,
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: COLORS.gray6
    },
    
    

})