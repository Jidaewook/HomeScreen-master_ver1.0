// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import {useSelector, useDispatch} from 'react-redux';

// import Tabs from './Tabs';
// import AuthStack from './AuthStack';

// export default () => {

    // const dispatch = useDispatch();
    // const { isLoggedIn, token } = useSelector((state) => state.usersReducer);

    // console.log(isLoggedIn)

    // return (
    //     <NavigationContainer>
    //         {isLoggedIn ? <Tabs /> : <AuthStack />}
    //     </NavigationContainer>
    // );
// };

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {useSelector, useDispatch} from 'react-redux';

import Tabs from './Tabs';
import AuthStack from './AuthStack';

const Router = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, token } = useSelector(state => state.usersReducer);

    // console.log(isLoggedIn)

    // const isLoggedIn = true;

    return (
        <NavigationContainer>
            {isLoggedIn ? <Tabs /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Router;