import React, { useRef, useState } from 'react';
import {View, Text, Animated, Dimensions, ImageBackground, Image} from 'react-native';
import TextButton from '../../component/common/TextButton';
import { COLORS, theme } from '../../consts';
import mocks from '../../consts/mocks';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get("window")


const Welcome = () => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef();
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigation = useNavigation();
    const onViewChangeRef = useRef(({viewableItems, changed}) => {
        setCurrentIndex(viewableItems[0].index)
    })

    const renderHeaderLogo = () => {

    } 

    const Dots = () => {
        const dotPosition = Animated.divide(scrollX, width)

        return (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
                {
                    mocks.onboarding_screens.map((item, index) => {
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.gray4, COLORS.main4, COLORS.gray4],
                            extrapolate: "clamp"
                        })
                        const dotWidth = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: "clamp"
                        })
                        return (
                            <Animated.View 
                                key={`dot-${index}`}
                                style={{
                                    borderRadius: 5, marginHorizontal: 6, width: dotWidth, height: 10, backgroundColor: dotColor
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View style={{height: 150, paddingBottom: 30}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Dots />
                </View>
                {currentIndex < mocks.onboarding_screens.length - 1 && 
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 40
                        }}
                    >
                        <TextButton 
                            label="Skip"
                            buttonContainerStyle={{
                                backgroundColor: null,
                                marginLeft: 50
                            }}
                            labelStyle={{
                                color: COLORS.black,
                            }}
                            onPress={() => navigation.navigate("SigninScreen")}
                        />
                        <TextButton 
                            label="Next"
                            buttonContainerStyle={{
                                height: 50,
                                width: 180,
                                borderRadius: 20
                            }}
                            labelStyle={{
                                color: COLORS.white,
                            }}
                            onPress={() => {
                                flatListRef.current.scrollToIndex({
                                    index: currentIndex + 1,
                                    Animated: true
                                })
                            }}
                        />
                    </View>
                }

                {
                    currentIndex == mocks.onboarding_screens.length - 1 && 
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            paddingHorizontal: 20,
                            marginVertical: 40
                        }}
                    >
                        <TextButton 
                            label="로그인 하기"
                            buttonContainerStyle={{
                                height: 50,
                                width: 180,
                                borderRadius: 20,
                                
                            }}
                            labelStyle={{
                                color: COLORS.white,
                            }}
                            onPress={() => navigation.navigate("SigninScreen")}
                        />
                    </View>
                }
            </View>
        )
    }

    

    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                flex: 1
            }}
        >
            <Animated.FlatList 
                ref={flatListRef}
                horizontal
                pagingEnabled
                data={mocks.onboarding_screens}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [
                        {nativeEvent: {contentOffset: {x: scrollX}}}
                    ], 
                    { useNativeDriver: false }
                )}
                onViewableItemsChanged={onViewChangeRef.current}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item, index}) => {
                    return (
                        <View
                            style={{width: width}}
                        >
                            <View
                                style={{flex: 3}}
                            >
                                <ImageBackground 
                                    source={item.backgroundImage}
                                    style={{
                                        felx: 1,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        height: '100%',
                                        width: '100%',
                                        marginTop: 0,
                                        
                                    
                                    }}
                                >
                                    <Image 
                                        source={item.bannerImage}
                                        resizeMode='contain'
                                        style={{
                                            width: width * 0.8,
                                            hegiht: width * 0.8,
                                            marginBottom: -300
                                        }}
                                    />
                                </ImageBackground>
                            </View>
                            {/* Detail */}
                            <View
                                style={{
                                    flex: 1,
                                    marginTop: 30,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 20,
                                    height: 300,
                                    // backgroundColor: 'black'
                                    // paddingBottom: 20
                                }}
                            >
                                <Text
                                    style={{fontSize: 25, marginTop: 50}}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        marginTop: 25,
                                        textAlign: 'center',
                                        color: COLORS.gray4,
                                        paddingHorizontal: 20,

                                    }}
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            
            />
            {renderFooter()}

        </View>
    );
};

export default Welcome;