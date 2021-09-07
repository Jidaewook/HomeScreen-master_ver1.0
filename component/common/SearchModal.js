import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Modal, Dimensions, TextInput, TouchableWithoutFeedback, Keyboard, SafeAreaView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import axios from 'axios';

import { COLORS, theme } from '../../consts';
import HLine from './HLine';

const UselessTextInput = (props) => {
    return (
        <TextInput 
            {...props}
            editable
            maxLength={50}
            multiline={false}
        />
    )
};

const DismissKeyboard = ({children}) => (
    <TouchableNativeFeedback
        onPress={() => Keyboard.dismiss()}
    >
        {children}
    </TouchableNativeFeedback>
);

const {height} = Dimensions.get("window");
// const [searchModal, setSearchModal] = useState('false');

const SearchModal = ({visible, close, complete}) => {
    const [inquire, setInquire] = ('제목')
    const refRBSheet = useRef();
    
    const method = ['제목', '제목+내용', '과목']

    const openBottom = () => {
        refRBSheet.current.open();
    }

    const closeBottom = () => {
        refRBSheet.current.close();
    }

    const inquireMenu = (param) => {

        if(param === "제목") {
            setInquire("제목")
            setList("제목")
        } else if (param === "제목+내용") {
            setInquire("제목+내용")
            setList("제목+내용")
        } else if (param === "과목") {
            setInquire("과목")
            setList("과목")
        }
        closeBottom();
    }

    return (
        <DismissKeyboard>
            <Modal
              animationType="slide"
              transparent={true}
              visible={searchModal}
              onRequestClose={() => {
                Alert.alert("모달을 닫습니다.")
                setSearchModal(!searchModal)
              }}
            >
              <View style={styles.centerModal}>
                <View style={styles.modalView}>
                  <Text>
                    서치모달
                  </Text>
                  <TouchableOpacity
                    style={[styles.sectionTitle]}
                    onPress={() => setSearchModal(!searchModal)}
                  >
                    <Text>
                      모달 닫기
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            
        </DismissKeyboard>
        
    );
};

export default SearchModal;