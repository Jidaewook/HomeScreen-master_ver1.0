import { Input } from 'galio-framework';
import React from 'react';
import {View, Text, SafeAreaView, Dimensions,TouchableOpacity, ScrollView, StyleSheet, KeyboardAvoidingView, ImageBackground, Image} from 'react-native';

import DismissKeyboard from '../../component/common/DismissKeyboard';
import { COLORS, theme } from '../../consts';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get("window")

const SigninScreen = () => {
    const navigation = useNavigation();
    
    return (
        <DismissKeyboard>
            <View style={styles.SafeAreaView}>
                <ImageBackground 
                        source={require('../../images/ImageBackground.png')}
                        style={styles.BackgroundImage}
                        resizeMode='cover'
                />
                    <View style={styles.MainView}>
                        <Text style={styles.MainTitle}>
                            PASS ME
                        </Text>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{paddingBottom: 130}}
                    >
                        <KeyboardAvoidingView behavior="padding" style={styles.Keyboard}>
                            <View>
                                <Text style={styles.SubTitle}>
                                        E-mail
                                </Text>
                                <Input 
                                    placeholder={"Email을 입력하세요"}
                                    style={styles.HolderText}
                                    
                                />
                                <Text style={styles.SubTitle}>
                                        Password
                                </Text>
                                <Input 
                                    placeholder={"Password를 입력하세요"}
                                    style={styles.HolderText}
                                />
                                <TouchableOpacity
                                    style={styles.Button}
                                    onPress={() => alert("경고")}
                                >
                                    <Text style={styles.ButtonText}>
                                        로그인
                                    </Text>
                                </TouchableOpacity>
                                <View
                                    style={{flexDirection: 'row', justifyContent: 'center'}}
                                >
                                    <TouchableOpacity
                                        style={styles.SmallButton1}
                                        onPress={() => alert("아이디찾기")}
                                    >
                                        <Text style={styles.SmallButtonText}>
                                             아이디찾기
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.BarButton}>
                                        |
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.SmallButton2}
                                        onPress={() => alert("비밀번호찾기")}
                                    >
                                        <Text style={styles.SmallButtonText}>
                                             비밀번호찾기
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={styles.BarButton}>
                                        |
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.SmallButton3}
                                        onPress={() => navigation.navigate("SignupScreen")}
                                    >
                                        <Text style={styles.SmallButtonText}>
                                             회원가입
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    onPress={() => alert("구글")}
                                >
                                    <Image
                                        style={styles.SocialButton}
                                        source={require('../../images/auth/google_login.png')}
                                        resizeMode='stretch'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => alert("카카오톡")}
                                >
                                    <Image
                                        style={styles.SocialButton}
                                        source={require('../../images/auth/kakao_login_1.png')}
                                        resizeMode='stretch'
                                    />
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>              
                    </ScrollView>
            </View>
        </DismissKeyboard>
        
    );
};

export default SigninScreen;

const styles = StyleSheet.create({
    SafeAreaView: {
        height: height
    },
    BackgroundImage: {
        flex: 1, 
        justifyContent: 'center',
        opacity: 0.75,
        height: height
    },  
    MainView: {
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        paddingHorizontal: 50,
    },
    MainTitle: {
        color: COLORS.main4, 
        fontWeight: 'bold',
        fontSize: theme.sizes.h1,
        marginBottom: 30
    },
    Keyboard: {
        flex:1, 
        paddingHorizontal: 50, 
        paddingVertical: 10, 
        justifyContent: 'center', 
    },
    SubTitle: {
        justifyContent: 'center',
        color: COLORS.main4,
        fontSize: theme.sizes.h4,
        fontWeight: 'bold'
        
    },
    HolderText: {
        borderRadius: 0, 
        borderWidth: 0, 
        borderBottomColor: COLORS.gray, 
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    Button: {
        backgroundColor: COLORS.main4,
        width: width/1.34,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    ButtonText: {
        justifyContent: 'center',
        fontSize: theme.sizes.h4,
        fontWeight: '400',
        color: COLORS.white
    },
    SmallButton1: {
        height: 30,
        width: 80,
        marginTop: 20,
        marginLeft: 5
    },
    SmallButton2: {
        height: 30,
        width: 100,
        marginTop: 20
    },
    SmallButton3: {
        height: 30,
        width: 80,
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
    SocialButton: {
        // justifyContent: 'center',
        // alignItems: 'center',
        width: 320,
        height: 65,
        marginLeft: -15
    }
})