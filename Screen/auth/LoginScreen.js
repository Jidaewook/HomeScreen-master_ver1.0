import React, {useState} from 'react';
import AuthLayout from '../../component/common/AuthLayout';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormInput from '../../component/common/FormInput';
import {AntDesign, Feather, Entypo} from '@expo/vector-icons';
import { COLORS, theme } from '../../consts';
import TextButton from '../../component/common/TextButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {userLogin} from '../../redux/userSlice';

import utils from '../../utils/Utils';
import TextIconButton from '../../component/common/TextIconButton';
import facebookIcon from '../../images/icon/auth/facebook_icon.png';


const LoginScreen = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [password, setPassword] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [showPass, setShowPass] = useState(false)
    
    const navigation = useNavigation();


    function isEnableSignin () {
        return (
            email != "" && password != "" && emailErr == ""
        ) 
    }

    const loginBtnTab = async () => {
        // console.log("login", email)
        // await axios.post("http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/users/login", {email, password})
        //             .then(res => {
        //                 console.log(res.data)
        //             })
        //             .catch(err => {
        //                 console.log(err.message)

        //             })
        
        dispatch(userLogin({email, password}))
    }



    return (
        <AuthLayout 
            title="PASSME LOGIN"
            subTitle="패스미 서비스를 이용하기 위해 로그인 하세요."
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
                <FormInput 
                    label={'PASSWORD'}
                    value={password}
                    secureTextEntry={!showPass}
                    placeholder={'Insert Your PASSWORD'}
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
                
                <TextButton 
                    buttonContainerStyle={{
                        backgroundColor: isEnableSignin() ? COLORS.main4 : COLORS.gray3, 
                        height: 55,
                        alignItems: 'center',
                        marginTop: 25,
                        borderRadius: 20 }}
                    disabled={isEnableSignin() ? false : true}
                    onPress={() => loginBtnTab()}
                    label={"로그인"}
                    labelStyle={styles.loginLabelStyle}
                />
                {/* Link Another Pages */}
                <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}
                >
                    <TouchableOpacity
                        style={styles.SmallButton1}
                        onPress={() => navigation.navigate("SignupScreen")}
                    >
                        <Text style={styles.SmallButtonText}>
                                회원가입
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.BarButton}>
                        |
                    </Text>
                    {/* <TouchableOpacity
                        style={styles.SmallButton2}
                        onPress={() => navigation.navigate("ForgotIdScreen")}
                    >
                        <Text style={styles.SmallButtonText}>
                                {"   "}아이디 찾기
                        </Text>
                    </TouchableOpacity> */}
                    {/* <Text style={styles.BarButton}>
                        |
                    </Text> */}
                    <TouchableOpacity
                        style={styles.SmallButton3}
                        onPress={() => navigation.navigate("ForgotPwScreen")}
                    >
                        <Text style={styles.SmallButtonText}>
                                비밀번호 찾기
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Footer */}
            <View>
                <TextIconButton 
                    label={"Continue with Facebook"}
                    icon={facebookIcon}
                    iconPosition={"LEFT"}
                    iconStyle={{tintColor: COLORS.white}}
                    labelStyle={{marginLeft: 15, color: COLORS.white}}
                    containerStyle={{height: 50, alignItems: 'center', borderRadius: 20, backgroundColor: 'blue'}}
                    onPress={() => alert("페이스북 로그인")}
                />
                <TextIconButton 
                    label={"Continue with Google"}
                    icon={require('../../images/icon/auth/google_icon.png')}
                    iconPosition={"LEFT"}
                    iconStyle={{tintColor: COLORS.white}}
                    labelStyle={{marginLeft: 15, color: COLORS.white}}
                    containerStyle={{height: 50, alignItems: 'center', borderRadius: 20, marginTop: 10, backgroundColor: COLORS.gray1}}
                    onPress={() => alert("구글 로그인")}
                />
            </View>
        </AuthLayout>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        marginTop: 50,

    },
    buttonStyle: {
        height: 55,
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 20,

    },  
    loginLabelStyle: {
        fontSize: 16,

    },
    SmallButton1: {
        height: 30,
        width: 80,
        marginTop: 20,
        marginLeft: -10
    },
    SmallButton2: {
        height: 30,
        width: 100,
        marginTop: 20,
    },
    SmallButton3: {
        height: 30,
        width: 100,
        marginTop: 20
    },
    BarButton: {
        height: 30,
        width: 10,
        marginTop: 20,
        marginLeft: 15
    },
    SmallButtonText: {
        fontSize: theme.sizes.h4,
        color: COLORS.black,
        textAlign: 'center'
    },
})
    