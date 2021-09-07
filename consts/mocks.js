export const viewItems = [
    {
        title: '제목1',
        image: require('../images/13.png')
    },
    {
        title: '제목2',
        image: require('../images/15.png')
    },
    {
        title: '제목3',
        image: require('../images/14.png')
    },
    
]
     

export const comments = [
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

export const menuItem = [
    {
      title: '알람설정',
      data: [
        {title: '알람설정', icon: 'notification', screen: 'Alarm'}
      ],
    },
    {
      title: '개인정보',
      data: [
        {title: '개인정보정책', icon: 'user', screen: 'Privacy'},
        {title: '서비스이용약관', icon: 'copy1', screen: 'Service'}
      ],
    },
    {
      title: '고객센터',
      data: [
        {title: '서비스문의', icon: 'customerservice', screen: ''},
        {title: 'FAQ', icon: 'questioncircleo', screen: 'Frequency'},
        {title: '오류신고', icon: 'bells', screen: ''}
      ],
    },
    {
      title: '서비스정보',
      data: [
        {title: '버전정보', icon: 'ellipsis1', screen: 'Version'},
        {title: '구독문의', icon: 'creditcard', screen: ''}
      ],
    },
    {
      title: '계정설정',
      data: [
        {title: '로그아웃', icon: 'dingding', screen: ''},
        {title: '탈퇴문의', icon: 'phone', screen: ''},
        {title: '      ', icon: '', screen: ''}
      ]
    }
  ]

export default {viewItems, comments, menuItem}