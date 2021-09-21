import { Input } from 'galio-framework';
import React, {useState} from 'react';
import {View, Text, SafeAreaView,TouchableOpacity, Dimensions, ScrollView, StyleSheet, Button, KeyboardAvoidingView, ImageBackground} from 'react-native';

import DismissKeyboard from '../../component/common/DismissKeyboard';
import { COLORS, theme } from '../../consts';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';

const {width, height} = Dimensions.get("window")

const SignupScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signupHandler = async () => {

        const newData = {
            name: name,
            email: email,
            password: password
        }

        const {data} = await Axios.post('http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/users/register', newData)
        
        console.log(data)

    } 
    
    return (
        <DismissKeyboard>
            <View style={{backgroundColor: COLORS.white, height: height}}>
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
                    style={{paddingBottom: 230}}
                >
                        <KeyboardAvoidingView behavior="padding" style={styles.Keyboard}>
                        <View>
                            <Input 
                                type={"default"} 
                                placeholder={"Email을 입력하세요"}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                style={{borderRadius: 0, borderWidth: 0, borderBottomColor: COLORS.gray, borderBottomWidth: StyleSheet.hairlineWidth}}
                            />
                            <Input
                                type={"default"} 
                                placeholder={"Password를 입력하세요"}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                style={{borderRadius: 0, borderWidth: 0, borderBottomColor: COLORS.gray, borderBottomWidth: StyleSheet.hairlineWidth}}
                            />
                            <Input 
                                type={"default"} 
                                placeholder={"name을 입력하세요"}
                                value={name}
                                onChangeText={(text) => setName(text)}
                                style={{borderRadius: 0, borderWidth: 0, borderBottomColor: COLORS.gray, borderBottomWidth: StyleSheet.hairlineWidth}}
                            />
                            <TouchableOpacity
                                style={styles.Button}
                                onPress={signupHandler}
                            >
                                <Text style={styles.ButtonText}>
                                    회원가입
                                </Text>
                            </TouchableOpacity>
                            <View
                                style={{flexDirection: 'row', justifyContent: 'center'}}
                            >
                                <TouchableOpacity
                                    style={styles.SmallButton1}
                                    onPress={() => alert("구글")}
                                >
                                    <Text style={styles.SmallButtonText}>
                                            구글 연동
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.BarButton}>
                                    |
                                </Text>
                                <TouchableOpacity
                                    style={styles.SmallButton2}
                                    onPress={() => alert("카카오톡")}
                                >
                                    <Text style={styles.SmallButtonText}>
                                            카카오톡 연동
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.BarButton}>
                                    |
                                </Text>
                                <TouchableOpacity
                                    style={styles.SmallButton3}
                                    onPress={() => navigation.navigate("SigninScreen")}
                                >
                                    <Text style={styles.SmallButtonText}>
                                            로그인
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </DismissKeyboard>

    );
};

export default SignupScreen;

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
        marginTop: 10,
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
    }
})