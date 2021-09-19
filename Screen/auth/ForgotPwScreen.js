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
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const navigation = useNavigation();

    function isEnableSignin () {
        return (
            password != "" && passwordErr == ""
        ) 
    }

    return (
        <AuthLayout
            title={"PASSME FORGOT PASSWORD"}
            subTitle={"잊어버린 비밀번호를 찾기 위해,                                    비밀번호를 입력해주세요"}
        >
            <View style={styles.formContainer}>
                <FormInput 
                    label={'PASSWORD'}
                    value={password}
                    placeholder={'Insert Your PASSWMORD'}
                    autoCompleteType="password"
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordErr)
                        setPassword(value)
                    
                    }}
                    errorMsg={passwordErr}
                    appendComponent={
                        <View
                            style={{justifyContent: 'center'}}
                        >
                            <AntDesign
                                name={"check"}
                                color={(password != "") || (password != "" && passwordErr == "") ? COLORS.main4 : COLORS.gray4}
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextButton 
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
                />
                <TextButton 
                    buttonContainerStyle={{
                        // backgroundColor: isEnableSignin() ? COLORS.main4 : COLORS.gray3, 
                        height: 55,
                        width: 150,
                        alignItems: 'center',
                        marginTop: 25,
                        borderRadius: 20 }}
                    // disabled={isEnableSignin() ? false : true}
                    onPress={() => navigation.navigate("SigninScreen")}
                    label={"로그인 하기"}
                    labelStyle={styles.loginLabelStyle}
                />
            </View>
            
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