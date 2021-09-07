import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Recommend from '../Screen/Main/Recommend/Recommend';
import Detail from '../Screen/Detail';
import RecommendDetail from '../Screen/Main/Recommend/RecommendDetail';

const RecommendStack = createStackNavigator();

export default () => {
    return (
        <RecommendStack.Navigator>
            <RecommendStack.Screen 
                name={"RecommendPage"}
                component={Recommend}
                options={{headerShown: false}}
            />
           <RecommendStack.Screen 
                name={"RecommendDetail"}
                component={RecommendDetail}
            />
        </RecommendStack.Navigator>
    );
};