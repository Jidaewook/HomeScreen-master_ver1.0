import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Signin, Signup, ForgotId, ForgotPw, AddInfo, Welcome} from '../Screen/auth/index';

import MainStack from './HomeStack';

const AStack = createStackNavigator();

const AuthStack = () => {
    <AStack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Welcome"
    >
        <AStack.Screen name="Welcome" component={Welcome}  />
        <AStack.Screen name="SigninScreen" component={Signin}  />
        <AStack.Screen name="AddInfoScreen" component={AddInfo}  />
        <AStack.Screen name="SignupScreen" component={Signup} />
        <AStack.Screen name="ForgotPwScreen" component={ForgotPw} />
        <AStack.Screen name="ForgotIdScreen" component={ForgotId} />

        {/* <Stack.Screen name="SplashScreen" component={Splash} /> */}
        <AStack.Screen name="MainStack" component={MainStack} />

    </AStack.Navigator>
}

export default AuthStack;
    