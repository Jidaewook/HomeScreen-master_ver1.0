import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { Image } from "react-native";
import { Asset } from "expo-asset";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux/store';
import AppLoading from 'expo-app-loading';

import Router from "./navigation/Router";
import Tabs from "./navigation/Tabs";
import { StatusBar } from "expo-status-bar";

const cacheImages = images =>
    images.map(image => {
        if (typeof image === "string") {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });

const cacheFonts = fonts =>
    fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadAssets = () => {
        const images = cacheImages([
            "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",
            require("./assets/splash.png")
        ]);
        const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
        return Promise.all([...images, ...fonts]);
    };
    const onFinish = () => setIsReady(false);

    return isReady ? (
        
         <AppLoading />
    ) : (
        <Tabs />
        // <Provider store={store}>
        //     <PersistGate persistor={persistor}>
        //         <Router />
        //     </PersistGate>
        //     <StatusBar style={'auto'} />
        // </Provider>
    );
}