import React from 'react';
import {View, Text} from 'react-native';

import AuthLayout from '../../component/common/AuthLayout';


const ForgotIdScreen = () => {
    return (
        <AuthLayout
            title={"PASSME FORGOT ID"}
            subTitle={"잊혀진 기억을..."}
        >
            <View>
                <Text>
                    FORGOTID
                </Text>
            </View>
        </AuthLayout>
    );
};

export default ForgotIdScreen;