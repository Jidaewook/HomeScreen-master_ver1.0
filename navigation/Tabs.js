import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../navigation/HomeStack';
import PostStack from '../navigation/PostStack';
import RecommendStack from '../navigation/RecommendStack';
import ProfileStack from '../navigation/ProfileStack';
import {Feather} from '@expo/vector-icons';

import themes from '../config/themes';


const Tabs = createBottomTabNavigator();

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "Movies";

const hideTabBarComponents = [
    'Recommend',
]

export default () => {
    

    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName
                    if (route.name === "Home") {
                        iconName = "home";
                    } else if (route.name === "List") {
                        iconName = "server";
                    } else if (route.name === "Quiz") {
                        iconName = "compass";
                    } else if (route.name === "Profile") {
                        iconName = "user"
                    }
                    return (
                        <Feather 
                            name={iconName}
                            color={focused ? themes.colors.basic : themes.colors.lightgray}
                            size={24}
                        />  
                    );
                }
            })}
            
            tabBarOptions={{
                activeTintColor: themes.colors.basic,
                inactiveTintColor: themes.colors.lightgray,
                showLabel: true,
                labelStyle: {
                    fontSize: 12, 
                    marginTop: -10                
                },
            }}


        >
                        
            

            <Tabs.Screen name="Home" component={HomeStack} />
            {/* <Tabs.Screen name="Quiz" component={RecommendStack}/>
            <Tabs.Screen name="List" component={PostStack} />
            <Tabs.Screen name="Profile" component={ProfileStack} /> */}

        </Tabs.Navigator>
    );
}; 