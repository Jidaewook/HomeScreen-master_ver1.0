import React, {useState} from 'react';
import {AsyncStorage, SectionList, SafeAreaView, View, Alert, Text, StyleSheet} from 'react-native';
import SettingSection from '../component/common/SettingSection';
import {AntDesign} from '@expo/vector-icons';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import * as Linking from 'expo-linking';
import {mocks} from '../consts'

const Setting = () => {
  const navigation = useNavigation();
  
  const movieScreen = (a) => {
    navigation.navigate(a)
  };

  const openOnPressMail = () => {
    Linking.openURL("mailto:dw4157@naver.com")
            .then((supported) => {
              if (supported) {
                return Linking.openURL(url)
                  .catch(() => null);
              }
            });
  }

  const [userData, setUserData] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);
  const getUserData = async () => {
    const token = await AsyncStorage.getItem('token')
    const headers = {
      'Authorization': 'Bearer ' + token
    }

    try {
      axios 
        .get('https://hidden-earth-75958.herokuapp.com/users/me', {headers: headers})
        .then(data => {
          setUserData(data.data)
        })
        .catch(err => {
          alert(err)
        })

    } catch(e) {
      alert(e)
    } finally {

    }
  } 

  const logout =  async () => {
    await Alert.alert(
      "로그아웃 하시겠습니까?",
      "Sub",
    [
        {
            text: "확인",
            onPress: () => {
                AsyncStorage.clear(),
                navigation.navigate("AuthStack")
            }
        },
        {
            text: "취소"
        }
    ])
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <SectionList
        sections={mocks.menuItem}
        renderItem={({item}) => (
          <TouchableOpacity 
            style={styles.itemBox}
            onPress={() => {
              switch (item.title) {
                case "서비스문의", "오류신고", "구독문의" :
                  openOnPressMail();
                  break
                case "로그아웃" :
                  alert("로그아웃 하시겠습니까?")
                  break
                case "탈퇴문의" : 
                  alert("탈퇴하시겠습니까?")
                  break
                default :
                  movieScreen(item.screen)
                  break
              }
            }}
          >
            <View style={styles.icon}>
              <AntDesign name={item.icon} size={14} />
            </View>
            <View style={styles.item}>
              <Text style={styles.item}> 
                {item.title}
              </Text>
            </View>
            <View style={styles.right}>
              {
                item.title === '버전정보' ? (
                  <Text style={{marginLeft: -15}}>1.0.0</Text>
                ) : (
                  item.title === '      ' ? (
                    <Text></Text>
                  ) : (
                  <AntDesign name="right" size={14} color="gray" />
                ))
              }
              
            </View>
          </TouchableOpacity> 
        )}
        renderSectionHeader={({section}) => (
          <SettingSection
            title={section.title}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
    
  );
};

export default Setting;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    sectionHeader: {
      height: 30,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: themes.colors.gray,
    },
    sectionList: {
      marginLeft: 10,
      width: '100%',
      justifyContent: 'center'
    },
    itemBox: {
      paddingLeft: 20,
      height: 50,
      fontSize: 18,
      backgroundColor: 'white',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    item: {
      width: '75%',
      alignItems: 'flex-start',
      fontSize: 14,
      justifyContent: 'center'
    },
    icon: {
      width: '10%',
      marginLeft: 20,
      marginRight: -5,
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    right: {
      width: '15%',
      marginLeft: 20,
      justifyContent: 'center'
    }
});
