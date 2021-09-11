import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Signin, Signup, ForgotId, ForgotPw, AddInfo, Welcome} from '../Screen/auth/index';

import MainStack from '../navigation/Stack';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Welcome"
    >
        <Stack.Screen name="Welcome" component={Welcome}  />
        <Stack.Screen name="SigninScreen" component={Signin}  />
        <Stack.Screen name="AddInfoScreen" component={AddInfo}  />
        <Stack.Screen name="SignupScreen" component={Signup} />
        <Stack.Screen name="ForgotPwScreen" component={ForgotPw} />
        <Stack.Screen name="ForgotIdScreen" component={ForgotId} />

        {/* <Stack.Screen name="SplashScreen" component={Splash} /> */}
        <Stack.Screen name="MainStack" component={MainStack} />

    </Stack.Navigator>
);