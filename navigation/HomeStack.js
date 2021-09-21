import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Main/Home/Home';
import Notification from '../Screen/Main/Home/Notification';
import Detail from '../Screen/Detail';
import NoticeBbs from '../Screen/Main/Detail/NoticeBbs';
import NcsBbs from '../Screen/Main/Detail/NcsBbs';
import PsatBbs from '../Screen/Main/Detail/PsatBbs';
import CommunicationList from '../Screen/Main/Detail/NcsBbsList/CommunicationList';
import MathList from '../Screen/Main/Detail/NcsBbsList/MathList';
import morePsat from '../Screen/Main/BBS/morePsat';
import moreNcs from '../Screen/Main/BBS/moreNcs';
import Setting from '../Screen/Setting';
import BackBtn from '../component/common/BackBtn';

const HStack = createStackNavigator();

const HomeStack = () => {
    return ( 
        <HStack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTransparent: false,
                headerBackImage: () => <BackBtn />
                
            }}
            initialRouteName="Main"
        >
            <HStack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false
                }}
            />
            <HStack.Screen 
                name="Notification" 
                component={Notification} 
               
            />
            <HStack.Screen name="Detail" component={Detail} />
            <HStack.Screen name="Setting" component={Setting}  />
            <HStack.Screen 
                options={{
                    title: "",
                    headerShown: true,
                    headerStyle: {
                        height: 100,
                        // backgroundColor: "white"
                    }
                }}
                name="NoticeBbs" component={NoticeBbs} 
            />
            <HStack.Screen 
                options={{
                    title: "",
                    headerShown: true,
                    headerStyle: {
                        height: 100,
                        // backgroundColor: "white"
                    }
                }}
                name="NcsBbs" component={NcsBbs} 
            />
                <HStack.Screen 
                    options={{
                        title: "",
                        headerShown: true,
                        headerStyle: {
                            height: 100,
                        }
                    }}
                    name="CommunicationList" component={CommunicationList} 
                />
                <HStack.Screen 
                    options={{
                        title: "",
                        headerShown: true,
                        headerStyle: {
                            height: 100,
                        }
                    }}
                    name="MathList" component={MathList} 
                />
            <HStack.Screen 
                options={{
                    title: "",
                    headerShown: true,
                    headerStyle: {
                        height: 100,
                    }
                }}
                name="PsatBbs" component={PsatBbs} 
            />
            <HStack.Screen 
                options={{
                    title: "",
                    headerShown: true,
                    headerStyle: {
                        height: 100,
                    }
                }}
                name="morePsat" component={morePsat} 
            />
            <HStack.Screen 
                options={{
                    title: "",
                    headerShown: true,
                    headerStyle: {
                        height: 100,
                    }
                }}
                name="moreNcs" component={moreNcs} 
            />
            
        </HStack.Navigator>
    );
}
    

export default HomeStack