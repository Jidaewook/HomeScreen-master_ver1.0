import React, {useState} from 'react';
import AuthLayout from '../../component/common/AuthLayout';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormInput from '../../component/common/FormInput';
import {AntDesign, Feather, Entypo} from '@expo/vector-icons';
import { COLORS, theme } from '../../consts';
import TextButton from '../../component/common/TextButton';
import {useNavigation} from '@react-navigation/native';
import utils from '../../utils/Utils';
import TextIconButton from '../../component/common/TextIconButton';

import facebookIcon from '../../images/icon/auth/facebook_icon.png';

const AddInfoScreen = () => {

    const [local, setLocal] = useState('')
    const [localErr, setLocalErr] = useState('')
    const [institutions, setInstitutions] = useState('')
    const [institutionsErr, setInstitutionsErr] = useState('')
    
    const navigation = useNavigation();

    function isEnableSignup () {
        return (
            institutions != "" && local != "" && localErr =="" && institutionsErr == ""
        )
    }

    return (
        <AuthLayout
            title="PASSME"
            subTitle="좀 더 나은 서비스를 위해 부가 사항을 입력해주세요."
        >
            <View style={styles.formContainer}>
                <FormInput 
                    label={'Name'}
                    disabled={true}
                    // value={name}
                    placeholder={'item.name'}
                    autoCompleteType="name"
                    onChange={(value) => {
                        // utils.validateEmail(value, setEmailErr)
                        // setEmail(value)
                    
                    }}
                    // errorMsg={emailE}
                    appendComponent={
                        <View
                            style={{justifyContent: 'center'}}
                        >
                            <AntDesign
                                name={"check"}
                                color={COLORS.main4}
                                size={24}
                            />
                        </View>
                    }
                />
                <FormInput 
                    label={'거주지역'}
                    value={local}
                    placeholder={'Insert Your Location'}
                    autoCompleteType="local"
                    containerStyle={{marginTop: 20}}
                    onChange={(value) => {
                        // utils.validatePassword(value, setPasswordErr)
                        setLocal(value)
                    }}
                    errorMsg={localErr}
                    appendComponent={
                        <View
                            style={{justifyContent: 'center'}}
                        >
                            <AntDesign
                                name={"check"}
                                color={(local != "") || (local != "" && localErr == "") ? COLORS.main4 : COLORS.gray4}
                                size={24}
                            />
                        </View>
                    }
                />
                <FormInput 
                    label={'선호하는 기관'}
                    value={institutions}
                    placeholder={'Insert Your Institutions'}
                    autoCompleteType="institutions"
                    containerStyle={{marginTop: 20}}
                    onChange={(value) => {
                        setInstitutions(value)
                    }}
                    errorMsg={institutionsErr}
                    appendComponent={
                        <View
                            style={{justifyContent: 'center'}}
                        >
                            <AntDesign
                                name={"check"}
                                color={(institutions != "") || (institutions != "" && institutionsErr == "") ? COLORS.main4 : COLORS.gray4}
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
                <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}
                >
                    <TouchableOpacity
                        style={styles.SmallButton1}
                        onPress={() => navigation.navigate("SignupScreen")}
                    >
                        <Text style={styles.SmallButtonText}>
                                뒤로가기
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View> 
        </AuthLayout>
    );
};

export default AddInfoScreen;

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
    registerLabelStyle: {
        fontSize: theme.sizes.h3,
    },
    SmallButtonText: {
        fontSize: theme.sizes.h4,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 20
    },
})
    