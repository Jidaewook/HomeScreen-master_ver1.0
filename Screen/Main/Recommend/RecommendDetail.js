import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Dimensions, Image, SafeAreaView, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';

import { COLORS } from '../../../consts';
import HLine from '../../../component/common/HLine';
import {BASE_URL} from '../../../constants';

const comments = [
    {
        comment: '1등',
        name: '유저네임',
        date: '2021-01-21'
    },
    {
        comment: '안녕하세요 댓글이벤트 당첨자입니다. 당첨된 댓글은 이메일을 보내주세요',
        name: '관리자',
        date: '2021-01-21'

    },
    {
        comment: '위에꺼 거짓말임',
        name: '나도 관리자는 아님',
        date: '2021-01-21'

    },
    {
        comment: '1등',
        name: '유저네임',
        date: '2021-01-21'
    },
    {
        comment: '안녕하세요 댓글이벤트 당첨자입니다. 당첨된 댓글은 이메일을 보내주세요',
        name: '관리자',
        date: '2021-01-21'

    },
    {
        comment: '1등',
        name: '유저네임',
        date: '2021-01-21'
    },
    {
        comment: '안녕하세요 댓글이벤트 당첨자입니다. 당첨된 댓글은 이메일을 보내주세요',
        name: '관리자',
        date: '2021-01-21'

    },
]


const RecommendDetail = ({route}) => {
    const {width, height} = Dimensions.get('window');

    const navigation = useNavigation();


    const {id} = route.params;
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    // const [text, onChangeText] = useState('Unless Text');
    // const [playing, setPlaying] = useState(false);

    // const togglePlaying = useCallback(() => {
    //     setPlaying((prev) => !prev);
    // }, [])
    console.log('id', id)

    const getDetail = async (detailId) => {
        setLoading(true)
        await axios.get(`${BASE_URL}/workbook/${detailId}`)
                    .then(res => {
                        setDetail(res.data.results)
                        setLoading(false)
                        console.log(res.data.results)
                    })
                    .catch(err => {
                        console.log(err)
                    })
    }

    useEffect(() => {
        getDetail(id);
    }, {})

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView>
                <View style={{height: height * 0.65, width: '100%'}}>
                    <Image 
                        source={{uri: detail.poster}}
                        style={{height: '100%', width: '100%'}}
                        resizeMode='stretch'
                    />
                </View>
                <View>
                    <YoutubePlayer 
                        height={230}
                        play={true}
                        // videoId={detail.url}
                    />
                </View>
                <View style={{height: 1200}}>
                    <View>
                        <Text style={styles.MainTitle}>
                            {detail.title}
                        </Text>
                        <Text style={styles.MainDesc}>
                            {detail.desc}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.slogan}>
                            정답
                        </Text>
                        <Text style={styles.slogan}>
                            {detail.answer}
                        </Text>
                    </View>
                    <HLine />
                    <View>
                        <Text style={styles.CommentTitle}>
                            질문과 답변
                        </Text>
                        <Text style={{maringTop: 20, marginHorizontal: 20, color: COLORS.gray}}>
                            질문에 대한 답변은 개인 쪽지로 드리거나 영상 콘텐츠로 제작되어 공개됩니다.
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput 
                                style={styles.CommentInput}
                                // value={text}
                                // onChangeText={onChangeText}
                            />
                            <TouchableOpacity
                                style={styles.CommentBtn}
                                onPress={() => alert("등록하시겠습니까?")}
                            >
                                <Text style={styles.CommentBtnTxt}>
                                    등록
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </SafeAreaView>
        
    );
};

export default RecommendDetail;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: COLORS.white,
        marginLeft: 0,
        marginRight: 0,
        marginHorizontal: 20
    },
    MainTitle: {
        marginLeft: 30,
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black
    },
    MainDesc: {
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 10,
        fontSize: 14,
        color: COLORS.gray1
    },
    slogan: {
        fontSize: 25,
        fontWeight: '500',
        justifyContent: 'center',
        color: COLORS.gray4,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'

    },
    CommentTitle: {
        marginTop: 15,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        width: '20%'
    },
    CommentInput: {
        width: '75%',
        height: 35,
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: COLORS.gray5

    },
    CommentBtn: {
        borderWidth: 1,
        borderColor: COLORS.gray2,
        backgroundColor: COLORS.gray5,
        width: 50,
        height: 35,
        marginLeft: 10,
        marginTop: 20,

    },
    CommentBtnTxt: {
        textAlign: 'center',
        marginTop: 10
    }
})