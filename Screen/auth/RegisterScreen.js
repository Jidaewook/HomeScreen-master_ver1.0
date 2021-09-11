import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import AuthLayout from '../../component/common/AuthLayout';
import FormInput from '../../component/common/FormInput';
import TextButton from '../../component/common/TextButton';
import TextIconButton from '../../component/common/TextIconButton';
import { COLORS, theme } from '../../consts';
import utils from '../../utils/Utils';

const RegisterScreen = () => {

    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [name, setName] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [password, setPassword] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [showPass, setShowPass] = useState(false)
    const navigation = useNavigation();

    function isEnableSignup () {
        return (
            email != "" && password != "" && name != "" && emailErr =="" && passwordErr == ""
        )
    }

    return (
        <AuthLayout
            title="PASSME"
            subTitle="회원가입 하세요"
        >
            <View>
                <FormInput 
                    label={'EMAIL'}
                    value={email}
                    placeholder={'Insert Your Email'}
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
                                color={(email != "") && (emailErr == "") ? COLORS.main4 : COLORS.gray4}
                                size={24}
                            />
                        </View>
                    }
                />
                <FormInput 
                    label={'PASSWORD'}
                    value={password}
                    secureTextEntry={!showPass}
                    placeholder={'Insert Your Password'}
                    autoCompleteType="password"
                    containerStyle={{marginTop: 20}}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordErr)
                        setPassword(value)
                    }}
                    errorMsg={passwordErr}
                    appendComponent={
                        <TouchableOpacity
                            style={{width: 40, alignItems: 'flex-end', justifyContent: 'center', marginTop: 15}}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Feather 
                                name={showPass ? "eye" : "eye-off"}
                                size={24}
                                color={COLORS.gray2}
                            />
                        </TouchableOpacity>
                    }
                />
                <FormInput 
                    label={"NAME"}
                    value={name}
                    placeholder={'Insert Your Name'}
                    autoCompleteType="name"
                    containerStyle={{marginTop: 20}}
                    onChange={(value) => {
                        setName(value)
                    }}
                    errorMsg={nameErr}
                    appendComponent={
                        <View
                            style={{justifyContent: 'center'}}
                        >
                            <AntDesign 
                                name={"check"}
                                color={(name != "") ? COLORS.main4 : COLORS.gray4}
                                size={24}
                            />
                        </View>
                    }
                />
                <TextButton 
                    buttonContainerStyle={{
                        backgroundColor: isEnableSignup() ? COLORS.main4 : COLORS.gray4,
                        alignItems: 'center',
                        marginTop: 25,
                        borderRadius: 20,
                        height: 55
                    }}
                    disabled={isEnableSignup() ? false : true}
                    onPress={() => alert("회원가입")}
                    label={"회원가입"}
                    labelStyle={styles.registerLabelStyle}
                />
                <View>
                    <TextIconButton
                        label={"다음"}
                        labelStyle={{color: COLORS.white, fontSize: theme.sizes.h3, }}
                        containerStyle={{ marginTop: 20, height: 50, alignItems: 'center', borderRadius: 20, backgroundColor: COLORS.main4}}
                        onPress={() => navigation.navigate("AddInfoScreen")}
                    />
                </View>
                <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}
                >
                    <TouchableOpacity
                        style={styles.SmallButton1}
                        onPress={() => navigation.navigate("SigninScreen")}
                    >
                        <Text style={styles.SmallButtonText}>
                                로그인하기
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AuthLayout>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    registerLabelStyle: {
        fontSize: theme.sizes.h3,
    },
    SmallButton1: {
        height: 30,
        width: 80,
        marginTop: 20,
    },
    SmallButtonText: {
        fontSize: theme.sizes.h3,
        color: COLORS.black,
        textAlign: 'center'
    },
})