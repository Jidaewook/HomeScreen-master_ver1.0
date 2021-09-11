import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import themes from '../../config/themes';
import { COLORS } from '../../consts';

const AuthLayout = ({titleContainerStyle, title, subTitle, children}) => {
    return (
        <View
            style={styles.container}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode="on-drag"
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: 25
                }}
            >
                {/* App Logos */}
                <View
                    style={{alignItems: 'center'}}
                >
                    {/* <Image 
                        source={}
                        resizeMode='contain'
                        style={{
                            height: 100,
                            width: 200
                        }}
                    /> */}
                </View>

                {/* Title */}
                <View
                    style={{marginTop: 25, ...titleContainerStyle}}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={styles.subTitle}
                    >
                        {subTitle}
                    </Text>
                </View>
                {children}
            </KeyboardAwareScrollView>
            
        </View>
    );
};

export default AuthLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingVertical: 25,
        backgroundColor: COLORS.white
    },
    subTitle: {
        textAlign: 'center',
        color: COLORS.gray4,
        marginTop: 25
    }
})