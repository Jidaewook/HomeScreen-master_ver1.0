// const subjects = {
//     001: '의사소통',
//     002: '수리',
//     003: '문제해결',
//     004: '자원관리',
//     005: '자기개발',
//     006: '조직이해',
//     007: '정보능력',
//     010: '기술능력',
//     011: '직업윤리',    
//   };
  

export const getLectures = async () => {
    const lectures = result.map(
        ({
            classes,
            subject_ids,
            title,
            poster_path,
            backdrop_path,
            desc,
            URL,
            update
        }) => ({
            key: String(id),
            title: title,
            // poster: poster_path,
            // backdrop: backdrop_path,
            subject: subject,
            desc: desc,
            URL: URL,
            update: update,
            // subjects: subject_ids.map((subject) => subjects[subject]),
        })
    )
    return lectures;

}

  
