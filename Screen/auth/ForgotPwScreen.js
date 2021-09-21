import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';

import AuthLayout from '../../component/common/AuthLayout';
import FormInput from '../../component/common/FormInput';
import TextButton from '../../component/common/TextButton';
import utils from '../../utils/Utils';
import {COLORS, theme} from '../../consts/index';

const ForgotPwScreen = () => {
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');

    const navigation = useNavigation();

    function isEnableSignin () {
        return (
            email != "" && emailErr == ""
        ) 
    }

    return (
        <AuthLayout
            title={"PASSME FORGOT PASSWORD"}
            subTitle={"잊어버린 비밀번호를 찾기 위해,                                    가입한 이메일을 입력해주세요"}
        >
            <View style={styles.formContainer}>
            <FormInput 
                    label={'E-mail'}
                    value={email}
                    placeholder={'Insert Your E-mail'}
                    autoCompleteType="email"
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailErr)
                        setEmail(value)
                    
                    }}
                    errorMsg={emailErr}
                    appendComponent={
                        <View
                            style={{justifyContent: 'center'}}
                        >
                            <AntDesign
                                name={"check"}
                                color={(email != "") || (email != "" && emailErr == "") ? COLORS.main4 : COLORS.gray4}
                                size={24}
                            />
                        </View>
                    }
                />
            </View>
            <TextButton 
                buttonContainerStyle={{
                    backgroundColor: isEnableSignin() ? COLORS.main4 : COLORS.gray3, 
                    height: 55,
                    alignItems: 'center',
                    marginTop: 25,
                    borderRadius: 20 }}
                // disabled={isEnableSignin() ? false : true}
                onPress={() => alert("이메일 전송")}
                label={"비밀번호 찾기"}
                labelStyle={styles.loginLabelStyle}
            />
                {/* <TextButton 
                    buttonContainerStyle={{
                        // backgroundColor: isEnableSignin() ? COLORS.main4 : COLORS.gray3, 
                        height: 55,
                        width: 150,
                        alignItems: 'center',
                        marginTop: 25,
                        borderRadius: 20 }}
                    // disabled={isEnableSignin() ? false : true}
                    onPress={() => navigation.navigate("ForgotIdScreen")}
                    label={"아이디 찾기"}
                    labelStyle={styles.loginLabelStyle}
                /> */}
                <TextButton 
                    buttonContainerStyle={{
                        // backgroundColor: isEnableSignin() ? COLORS.main4 : COLORS.gray3, 
                        height: 55,
                        alignItems: 'center',
                        marginTop: 25,
                        borderRadius: 20 }}
                    // disabled={isEnableSignin() ? false : true}
                    onPress={() => navigation.navigate("SigninScreen")}
                    label={"로그인 하기"}
                    labelStyle={styles.loginLabelStyle}
                />            
        </AuthLayout>
    );
};

export default ForgotPwScreen;

const styles = StyleSheet.create({
    formContainer: {
        // flex: 1,
        marginTop: 50,
        height: 100,
        // backgroundColor: 'black'
    },
})