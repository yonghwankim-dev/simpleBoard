import { useState } from "react";


function Posting(props){
    // 게시글 샘플 데이터
    const [postings, setPostings] = useState([
        {regnum : 1, title : 'title1', author : 'user1', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user1'},
        {regnum : 2, title : 'title1', author : 'user2', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user2'},
        {regnum : 3, title : 'title3', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 4, title : 'title4', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 5, title : 'title5', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 6, title : 'title6', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 7, title : 'title7', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 8, title : 'title8', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 9, title : 'title9', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 10, title : 'title10', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 11, title : 'title11', author : 'user1', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user1'},
        {regnum : 12, title : 'title12', author : 'user2', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user2'},
        {regnum : 13, title : 'title13', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 14, title : 'title14', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 15, title : 'title15', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 16, title : 'title16', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 17, title : 'title17', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 18, title : 'title18', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 19, title : 'title19', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
        {regnum : 20, title : 'title20', author : 'user3', regdate : '2021-08-20', hit : 0, recommand : 0, id : 'user3'},
    ]);

    props.onSubmit(postings);   // 부모 컴포넌트에게 샘플 데이터 전달

    // 게시글 목록 프레임
    const PostingInfo = (posting)=>{
        const [order, setOrder] = useState((posting.regnum%2==0 ? 'even' : 'odd'));
        const [sorting, setSorting] = useState('sorting_'+posting.regnum);
        const [pageUrl, setPageUrl] = useState('/board/detail?regnum='+posting.regnum);
        return (
            <tr className={order} key={posting.regnum}>
                <td className={sorting}>{posting.regnum}</td>
                <td><a href={pageUrl} className="text-decoration-none text-dark">{posting.title}</a></td>
                <td>{posting.author}</td>
                <td>{posting.regdate}</td>
                <td>{posting.hit}</td>
                <td>{posting.recommand}</td>
            </tr>
        );
    }

    // 게시글 리스트 구현
    
    
    const postingsList = [];
    const curPage = props.curPage;              // 현재 페이지 번호
    const postingUnits = props.postingUnits;    // 게시글 단위
    const start = (curPage-1)*postingUnits;
    const end = curPage*postingUnits-1;
    
    for(let i=start ; i<=end ; i++)
    {
        postingsList.push(PostingInfo(postings[i]));
    }


    return (
        <>
        {postingsList}
        </>
    );
}

export default Posting;